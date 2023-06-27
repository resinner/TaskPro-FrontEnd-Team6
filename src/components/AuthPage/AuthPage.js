import { Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';

import RegisterForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/LoginForm/LoginForm';
import {
  Modal,
  ModalNav,
  ModalNavItem,
  WelcomeWrapper,
} from './AuthPage.styled';

const AuthPage = () => {
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

        <Suspense fallback="Loading">
          <Outlet />
        </Suspense>
      </Modal>
    </WelcomeWrapper>
  );
};

export default AuthPage;
