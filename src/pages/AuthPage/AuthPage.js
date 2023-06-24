import React from 'react';
import { useParams } from 'react-router-dom';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/LoginForm/LoginForm';

import { WelcomeWrapper, Modal, ModalNav, ModalNavItem } from './AuthPageStyles';

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
