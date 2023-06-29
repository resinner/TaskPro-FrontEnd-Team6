// theme
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';
import { selectUserTheme } from 'redux/auth/authSelectors';
import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { getUser } from 'redux/user/userOperations';
import { getAllDashboards } from 'redux/dashboards/dashboardsOperations';

// components
import Header from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';
// import ScreensPage from 'components/ScreensPage/ScreensPage';

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
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllDashboards());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme[selectThemeIndex()]}>
      <Container>
        <Header />

        <Sidebar />

        {/* <ScreensPage /> */}

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
