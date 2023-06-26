import React from 'react';
// theme
import { theme } from '../../constants/theme';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/themeSelectors';
import { ThemeProvider } from 'styled-components';

// components
import Header from '../../components/Header/Header';
import { Container } from '../../components/Container/Container.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';

export default function HomePage() {
  const activeTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Container>
        <Header />
        {/* sidear */}
        <Sidebar />

        {/* main */}
      </Container>
    </ThemeProvider>
  );
}
