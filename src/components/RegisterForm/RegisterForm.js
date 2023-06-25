import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

import { AuthForm, AuthFormWrapper, AuthFormPasswordIcon, AuthFormField, AuthFormSubmitButton } from 'pages/AuthPage/AuthPageStyles';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { register } from '../../redux/auth/operations';

const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Name must be at least 2 characters').max(32, 'Name must be at most 32 characters').required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().trim().required('Password is required')
        .min(8, 'Password must be at least 8 characters').max(64, 'Password must be at most 64 characters')
        .matches( /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$!%*?&]+$/, 'Password must contain at least one uppercase letter, and one lowercase letter'
    ),
})

const initialValues = {
    name: '',
    email: '',
    password: '',
    showPassword: false
};

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    // const dispatch = useDispatch();
    
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    const onSubmit = (values,  { resetForm }) => {
        // const { name, email, password } = values;
        console.log(values)
        // dispatch(
        //     register({ name, email, password})
        // );
        resetForm();
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <AuthForm>
                <AuthFormWrapper>
                    <ErrorMessage name="name" component="div" className='auth-form__error-message' />
                    <AuthFormField type="text" id="name" name="name" placeholder='Enter your name' />
                </AuthFormWrapper>

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

                <AuthFormSubmitButton type="submit">Register now</AuthFormSubmitButton>
            </AuthForm>
        </Formik>
    );
};
