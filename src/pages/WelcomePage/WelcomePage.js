import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../images/logo.png';
import iconImage from '../../images/welcome-icon.png';

const WelcomeWrapper = styled.div`
    height: 100vh;
    background: linear-gradient(180deg, rgba(196, 196, 196, 0) 25%, #BEDBB0 92.19%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const WelcomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;

    @media (min-width: 375px) {
        width: 335px;
    }

    @media (min-width: 768px) {
        width: 473px;
    }
`;

const WelcomeIcon = styled.img`
    width: 124px;
    height: 124px;

    @media (min-width: 768px) {
        width: 162px;
        height: 162px;
    }
`;

const WelcomeLogo = styled.div`
    margin-top: 14px;
    display: flex;
    align-items: center;
    gap: 14px;
    height: 42px;

    @media (min-width: 768px) {
        margin-top: 24px;
        height: 60px;
    }
`;

const WelcomeLogoIcon = styled.img`
    width: 40px;
    height: 40px;

    @media (min-width: 768px) {
        width: 48px;
        height: 48px;
    }
`;

const WelcomeLogoTitle = styled.h1`
    margin: 0;
    font-weight: 600;
    font-size: 28px;
    line-height: 42px;
    letter-spacing: -0.04em;
    color: #161616;

    @media (min-width: 768px) {
        font-size: 40px;
        line-height: 60px;
    }
`;

const WelcomeDescription = styled.p`
    margin-top: 24px;
    margin-bottom: 48px;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #161616;
`;

const WelcomeRegisterButton = styled(Link)`
    width: calc(100% - 40px);
    padding: 14px;
    margin-bottom: 14px;
    text-decoration: none;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
    background: #161616;
    border-radius: 8px;

    @media (min-width: 768px) {
        width: 344px;
    }
`;

const WelcomeLoginButton = styled(Link)`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    text-decoration: none;
    color: #161616;
    background: none;
    border: none;
`;

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
                    Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!
                </WelcomeDescription>

                <WelcomeRegisterButton to="/auth/register">Registration</WelcomeRegisterButton>
                <WelcomeLoginButton to="/auth/login">Log In</WelcomeLoginButton>
            </WelcomeContainer>
        </WelcomeWrapper>
    );
};

export default WelcomePage;
