import React from 'react';
import logoImage from '../../images/logo.png';
import iconImage from '../../images/welcome-icon.png';

import {
  WelcomeWrapper,
  WelcomeIcon,
  WelcomeLogo,
  WelcomeLogoIcon,
  WelcomeContainer,
  WelcomeDescription,
  WelcomeLoginButton,
  WelcomeRegisterButton,
  WelcomeLogoTitle,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <WelcomeWrapper>
      <WelcomeContainer>
        <WelcomeIcon src={iconImage} alt="man with macbook" />

        <WelcomeLogo>
          <WelcomeLogoIcon src={logoImage} alt="logo" />
          <WelcomeLogoTitle>Task Pro</WelcomeLogoTitle>
        </WelcomeLogo>

        <WelcomeDescription>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </WelcomeDescription>

        <WelcomeRegisterButton to="/auth/register">
          Registration
        </WelcomeRegisterButton>
        <WelcomeLoginButton to="/auth/login">Log In</WelcomeLoginButton>
      </WelcomeContainer>
    </WelcomeWrapper>
  );
};

export default WelcomePage;
