import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import WelcomePage from './WelcomePage/WelcomePage';
import AuthPage from './AuthPage/AuthPage';
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';
// import HomePage from './HomePage/HomePage';
// import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

// import { lazy } from 'react';
// const WelcomePage = lazy(() => import('../components/WelcomePage/WelcomePage'));
// const AuthPage = lazy(() => import('../components/AuthPage/AuthPage'));
// const LoginForm = lazy(() => import('../components/LoginForm/LoginForm'));
// const RegisterForm = lazy(() => import('../components/RegisterForm/RegisterForm'));

export const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<SharedLayout />}> */}
      {/* <Route index element={<WelcomePage />} /> */}
      <Route path="/" element={<Navigate to="/welcome" replace />} />
      <Route path="/welcome" element={<WelcomePage />} />

      <Route path="auth/:id" element={<AuthPage />}>
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/home" component={<LoginForm />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/home" component={<RegisterForm />} />
          }
        />
      </Route>
      {/* <Route
        path="home"
        element={
          <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
        }
      /> */}
      {/* <Route path="home/:boardName" element={<Board />} /> */}
      {/* </Route> */}
    </Routes>
  );
};
