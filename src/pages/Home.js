// theme
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/theme';
import { selectUserTheme } from 'redux/auth/authSelectors';

// components
import Header from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';
import ScreensPage from 'components/ScreensPage/ScreensPage';

const Home = () => {
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

  return (
    <ThemeProvider theme={theme[selectThemeIndex()]}>
      <Container>
        <Header />

        <Sidebar />

        <ScreensPage />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
