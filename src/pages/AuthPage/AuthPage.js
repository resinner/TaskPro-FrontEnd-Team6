import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/LoginForm/LoginForm';
import styled from 'styled-components'

const WelcomeWrapper = styled.div`
    height: 100vh;
    background: linear-gradient(180deg, rgba(196, 196, 196, 0) 25%, #BEDBB0 92.19%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
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

const ModalNav = styled.div`
    display: flex;
    gap: 14px;
    margin-bottom: 40px;
`;

const ModalNavItem = styled(NavLink)`
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

export default function AuthPage() {
  const { id } = useParams();

    return (
        <WelcomeWrapper>
            <Modal>
                <ModalNav>
                    <ModalNavItem to="/auth/register">Registration</ModalNavItem>
                    <ModalNavItem to="/auth/login">Log In</ModalNavItem>
                </ModalNav>

                {id === 'login' && <LoginForm />}
                {id === 'register' && <RegisterForm />}
            </Modal>
        </WelcomeWrapper>
  );
};
