import React, { useState } from 'react';

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { AuthForm, AuthFormWrapper, AuthFormPasswordIcon, AuthFormField, AuthFormSubmitButton } from 'pages/AuthPage/AuthPageStyles';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().trim().required('Password is required')
        .min(8, 'Password must be at least 8 characters').max(64, 'Password must be at most 64 characters')
        .matches( /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]+$/, 'Password must contain at least one uppercase letter, and one lowercase letter'
    ),
})

const initialValues = {
    email: '',
    password: '',
    showPassword: false
};


export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    // const dispatch = useDispatch();

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmit = (values,  { resetForm }) => {
        // const { email, password } = values;
        console.log(values);
        // dispatch(logIn({ email, password }));
        resetForm();
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <AuthForm>
                <AuthFormWrapper>
                    <ErrorMessage name="email" component="div" className='auth-form__error-message' />
                    <AuthFormField type="email" id="email" name="email" placeholder='Enter your email' />
                </AuthFormWrapper>

                <AuthFormWrapper>
                    <ErrorMessage name="password" component="div" className='auth-form__error-message' />
                    <AuthFormField type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder='Create a password' />
                    <AuthFormPasswordIcon onClick={handleTogglePassword}>
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </AuthFormPasswordIcon>
                </AuthFormWrapper>

                <AuthFormSubmitButton type="submit">Login now</AuthFormSubmitButton>
            </AuthForm>
        </Formik>
           
    );
};
