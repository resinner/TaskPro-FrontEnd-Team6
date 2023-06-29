import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('./pages/Home'));
const AuthPage = lazy(() => import('./pages/Auth'));
const WelcomePage = lazy(() => import('./pages/Welcome'));
const ScreenPage = lazy(() => import('./components/ScreensPage/ScreensPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />

        <Route
          path="/home"
          element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
        >
          <Route path=":boardName" element={<ScreenPage />} />
        </Route>

        <Route
          path="auth/:id"
          element={
            <RestrictedRoute redirectTo="/home" component={<AuthPage />} />
          }
        >
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route
            path="*"
            element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

/* <Route path="home/:boardName" element={<Board />} /> */
/* </Route> */
