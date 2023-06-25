// theme
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelectors';

import ThemePicker from 'components/ThemePicker/ThemePicker';

export const App = () => {
  const activeTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <ThemePicker />
    </ThemeProvider>
  );
};
