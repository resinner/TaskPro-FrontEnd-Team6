// theme
import { theme } from 'constants/theme';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelectors';
import { ThemeProvider } from 'styled-components';

// components
import Header from 'components/Header/Header';
import { Container } from 'components/Container/Container.styled';
import NeedHelpBlock from 'components/NeedHelpBlock/NeedHelpBlock';

export const App = () => {
  const activeTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Container>
        <Header />
        <NeedHelpBlock />
        {/* sidear */}

        {/* main */}
      </Container>
    </ThemeProvider>
  );
};
