// theme
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';
import { selectUserTheme } from 'redux/auth/authSelectors';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { getAllDashboards } from 'redux/dashboards/dashboardsOperations';

// components
import Header from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';
import Loader from 'components/AuthPage/Loader';

const Home = () => {
  const dispatch = useDispatch();

  const activeUserTheme = useSelector(selectUserTheme);

  const selectThemeIndex = () => {
    if (activeUserTheme === 'dark') {
      return 0;
    } else if (activeUserTheme === 'light') {
      return 1;
    } else if (activeUserTheme === 'violet') {
      return 2;
    }
  };

  useEffect(() => {
    dispatch(getAllDashboards());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme[selectThemeIndex()]}>
      <Container>
        <Header />

        <Sidebar />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
