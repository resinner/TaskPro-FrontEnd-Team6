import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {
  AuthForm,
  AuthFormWrapper,
  AuthFormPasswordIcon,
  AuthFormField,
  AuthFormSubmitButton,
  ErrorSection,
} from './LoginFrom.styled';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/authOperations';
import Loader from 'components/AuthPage/Loader';
import { selectIsLoading } from 'redux/auth/authSelectors';
import { toast } from 'react-toastify';


const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .trim()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be at most 64 characters')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]+$/,
      'Password must contain at least one letter and at least one number'
    ),
});

const initialValues = {
  email: '',
  password: '',
  showPassword: false,
};

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values, { resetForm }) => {
    const { email, password } = values;
    const data = await dispatch(logIn({ email, password }));
    if (data.error.message === "Rejected") {
      toast.error("Email or password is wrong")
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <AuthForm>
        <AuthFormWrapper>
          <ErrorSection name="email" component="div" />
          <AuthFormField
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </AuthFormWrapper>

        <AuthFormWrapper>
          <ErrorSection name="password" component="div" />
          <AuthFormField
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Confirm a password"
          />
          <AuthFormPasswordIcon onClick={handleTogglePassword}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </AuthFormPasswordIcon>
        </AuthFormWrapper>

        <AuthFormSubmitButton type="submit">
          {loading ? <Loader /> : 'Login now'}
        </AuthFormSubmitButton>
      </AuthForm>
    </Formik>
  );
};

export default LoginForm;
