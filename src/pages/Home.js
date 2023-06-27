// theme
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { selectTheme } from 'redux/theme/themeSelectors';
import { theme } from 'constants/theme';

// components
import Header from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';

const Home = () => {
  const activeTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Container>
        <Header />

        <Sidebar />

        {/* main */}
      </Container>
    </ThemeProvider>
  );
};

export default Home;
