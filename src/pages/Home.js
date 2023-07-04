// theme
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';
import { selectUserTheme } from 'redux/auth/authSelectors';
import { Outlet, useNavigate } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import {
  getAllDashboards,
  getDashboardById,
} from 'redux/dashboards/dashboardsOperations';

// components
import Header from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';
import Loader from 'components/AuthPage/Loader';
import Start from 'components/Start/Start';
import { selectAllDashboards } from 'redux/dashboards/dashboardsSelectors';

const Home = () => {
  const dispatch = useDispatch();
  const dashboards = useSelector(selectAllDashboards);
  const navigate = useNavigate();
  const activeUserTheme = useSelector(selectUserTheme);

  const activeBoard = dashboards.filter(item => item.name === 'Spearhead');

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

  useEffect(() => {
    // console.log('adasdas');
    // if (!activeBoard.legth) {
    //   return;
    // }

    dispatch(getDashboardById(activeBoard[0]?._id));
    navigate(`/home/${activeBoard[0]?.name}`);
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme[selectThemeIndex()]}>
      <Container>
        <Header />

        <Sidebar />

        {dashboards.length !== 0 ? (
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        ) : (
          <Start />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Home;
