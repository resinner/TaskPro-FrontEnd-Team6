import ThemePicker from 'components/Header/ThemePicker/ThemePicker';
import { HeaderWrapper } from './Header.styled';
import UserBlock from './UserBlock/UserBlock';

const Header = () => {
  return (
    <HeaderWrapper>
      <ThemePicker />
      <UserBlock />
    </HeaderWrapper>
  );
};

export default Header;
