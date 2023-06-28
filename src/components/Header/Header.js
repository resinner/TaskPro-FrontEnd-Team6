// import { useState } from 'react';
import ThemePicker from 'components/Header/ThemePicker/ThemePicker';
import { HeaderWrapper, UserWrapper } from './Header.styled';
import UserBlock from './UserBlock/UserBlock';
import BurgenMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
  return (
    <HeaderWrapper>
      <BurgenMenu />

      <UserWrapper>
        <ThemePicker />
        <UserBlock />
      </UserWrapper>
    </HeaderWrapper>
  );
};

export default Header;
