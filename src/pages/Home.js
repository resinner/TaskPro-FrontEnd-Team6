// theme
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { selectUserTheme } from 'redux/auth/authSelectors';
import { getAllDashboards } from 'redux/dashboards/dashboardsOperations';
import { selectAllDashboards } from 'redux/dashboards/dashboardsSelectors';

// components
import Header from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';
import Loader from 'components/AuthPage/Loader';
import Start from 'components/Start/Start';

const Home = () => {
  const dispatch = useDispatch();
  const dashboards = useSelector(selectAllDashboards);
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

        {dashboards.length !== 0 && (
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        )}

        {dashboards.length === 0 && <Start />}
      </Container>
    </ThemeProvider>
  );
};

export default Home;
