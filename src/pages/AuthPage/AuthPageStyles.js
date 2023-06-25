import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Form, Field } from 'formik';

export const WelcomeWrapper = styled.div`
    height: 100vh;
    background: linear-gradient(180deg, rgba(196, 196, 196, 0) 25%, #BEDBB0 92.19%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    border: 1px solid black;
    width: calc(100% - 84px);
    padding: 24px;
    background: #151515;
    border-radius: 8px;

    @media (min-width: 375px) {
        width: 290px;
    }

    @media (min-width: 768px) {
        border: 1px solid black;
        padding: 40px;
        width: 345px;
    }
`;

export const ModalNav = styled.div`
    display: flex;
    gap: 14px;
    margin-bottom: 40px;
`;

export const ModalNavItem = styled(NavLink)`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.02em;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.3);
    background: none;
    border: none;
    transition: color cubic-bezier(0.075, 0.82, 0.165, 1) 250ms;

    &:hover,
    &.active {
        color: #ffffff;
    }
`;

export const AuthFormWrapper = styled.div`
    position: relative;
    margin-bottom: 14px;

    .auth-form__error-message {
        margin: 0;
        color: #bab0b0;
        font-size: 12px;
    }
`;

export const AuthForm = styled(Form)`
    margin: 0;
    display: flex;
    flex-direction: column;
`;

export const AuthFormField = styled(Field)`
    width: calc(100%);
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

export const AuthFormPasswordIcon = styled.span`
    position: absolute;
    top: 16px;
    right: 18px;
    color: #ffffff;
    opacity: 0.4;
`;

export const AuthFormSubmitButton = styled.button`
    margin-top: 10px;
    padding: 14px;
    border: none;
    background: #BEDBB0;
    border-radius: 8px;

    font-family: 'Poppins';
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #161616;
`;
