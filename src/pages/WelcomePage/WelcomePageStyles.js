import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WelcomeWrapper = styled.div`
    height: 100vh;
    background: linear-gradient(180deg, rgba(196, 196, 196, 0) 25%, #BEDBB0 92.19%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WelcomeContainer = styled.div`
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

export const WelcomeIcon = styled.img`
    width: 124px;
    height: 124px;

    @media (min-width: 768px) {
        width: 162px;
        height: 162px;
    }
`;

export const WelcomeLogo = styled.div`
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

export const WelcomeLogoIcon = styled.img`
    width: 40px;
    height: 40px;

    @media (min-width: 768px) {
        width: 48px;
        height: 48px;
    }
`;

export const WelcomeLogoTitle = styled.h1`
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

export const WelcomeDescription = styled.p`
    margin-top: 24px;
    margin-bottom: 48px;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    color: #161616;
`;

export const WelcomeRegisterButton = styled(Link)`
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

export const WelcomeLoginButton = styled(Link)`
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
