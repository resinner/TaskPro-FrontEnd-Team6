import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const AuthFormWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;

  .auth-form__error-message {
    margin: 0;
    color: #bab0b0;
    font-size: 12px;
  }
`;

const AuthForm = styled(Form)`
    margin: 0;
    display: flex;
    flex-direction: column;
`;

const AuthFormField = styled(Field)`
    width: calc(100% - 36px);
    padding: 14px 18px;
    margin-bottom: 14px;
    background: #1f1f1f;
    background-color: rgba(31, 31, 31, 1);
    opacity: 0.4;
    border: 1px solid #bedbb0;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #ffffff;
`;

const AuthFormPasswordIcon = styled.span`
    position: absolute;
    bottom: 30px;
    right: 18px;
    color: #ffffff;
    opacity: 0.4;
`;

const AuthFormSubmitButton = styled.button`
    margin-top: 10px;
    padding: 14px;
    border: none;
    background: #bedbb0;
    border-radius: 8px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #161616;
`;


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
