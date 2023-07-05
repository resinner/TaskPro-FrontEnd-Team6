import 'react-toastify/dist/ReactToastify.css';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import PrivateRoute from './components/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute';
import Layout from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/authSelectors';
import { refreshCurrentUser } from 'redux/auth/authOperations';
import Loader from 'components/AuthPage/Loader';

const HomePage = lazy(() => import('./pages/Home'));
const AuthPage = lazy(() => import('./pages/Auth'));
const WelcomePage = lazy(() => import('./pages/Welcome'));
const ScreenPage = lazy(() => import('./components/ScreensPage/ScreensPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  component={<WelcomePage />}
                />
              }
            />

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
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};
