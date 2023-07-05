import { Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/LoginForm/LoginForm';
import {
  Modal,
  ModalNav,
  ModalNavItem,
  WelcomeWrapper,
} from './AuthPage.styled';
import Loader from './Loader';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <WelcomeWrapper>
      < ToastContainer />
      <Modal>
        <ModalNav>
          <ModalNavItem to="/auth/register">Registration</ModalNavItem>
          <ModalNavItem to="/auth/login">Log In</ModalNavItem>
        </ModalNav>

        {id === 'login' && <LoginForm />}
        {id === 'register' && <RegisterForm />}

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Modal>
    </WelcomeWrapper>
  );
};

export default AuthPage;
