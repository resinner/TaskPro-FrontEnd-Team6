import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('./pages/Home'));
const AuthPage = lazy(() => import('./pages/Auth'));
const WelcomePage = lazy(() => import('./pages/Welcome'));

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
          }
        />

        <Route path="/welcome" element={<WelcomePage />} />

        <Route
          path="auth/:id"
          element={<RestrictedRoute redirectTo="/" component={<AuthPage />} />}
        >
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>
      </Route>
    </Routes>
  );
};

/* <Route path="home/:boardName" element={<Board />} /> */
/* </Route> */
