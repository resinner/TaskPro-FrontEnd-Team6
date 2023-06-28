import React from 'react';
import iconImage from '../../images/welcome-icon.png';

import sprite from '../../images/sprite.svg';

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
          <WelcomeLogoIcon>
            <use href={sprite + '#icon-logo'} />
          </WelcomeLogoIcon>

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
