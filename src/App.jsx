import React from 'react';
import { Route, Routes } from 'react-router-dom';

import WelcomePage from './pages/WelcomePage/WelcomePage';
import AuthPage from './pages/AuthPage/AuthPage';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import HomePage from './pages/HomePage/HomePage';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';

// import { lazy } from 'react';
// const WelcomePage = lazy(() => import('../components/WelcomePage/WelcomePage'));
// const AuthPage = lazy(() => import('../components/AuthPage/AuthPage'));
// const LoginForm = lazy(() => import('../components/LoginForm/LoginForm'));
// const RegisterForm = lazy(() => import('../components/RegisterForm/RegisterForm'));

export const App = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
        }
      />
      {/* <Route path="home/:boardName" element={<Board />} /> */}
      {/* </Route> */}
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="auth/:id" element={<AuthPage />}>
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/" component={<LoginForm />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/" component={<RegisterForm />} />
          }
        />
      </Route>
    </Routes>
  );
};