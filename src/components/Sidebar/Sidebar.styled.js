import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Aside = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.sidebar.background};
  width: 260px;
  padding: 24px;

  z-index: 99;
  max-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
    props.isOpen
      ? 'transform: translateX(0);'
      : 'transform: translateX(-110%);'}

  @media screen and (max-width: 767px) {
    width: 225px;
    padding: 14px 14px 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 260px;
    transform: translateX(0);
  }
`;

export const Logo = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  margin-bottom: 60px;
  gap: 8px;
`;

export const IconLogo = styled.svg`
  height: 32px;
  width: 32px;
`;

export const LogoText = styled.h1`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.64px;
  color: ${props => props.theme.sidebar.textMain};
`;

export const MyBoardsText = styled.p`
  font-family: Poppins;
  font-size: 12px;
  letter-spacing: -0.24px;
  margin-bottom: 8px;
  color: ${props => props.theme.sidebar.textSecondary};
`;

export const AddBoardBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${props => props.theme.sidebar.border};
  border-bottom: 1px solid ${props => props.theme.sidebar.border};

  padding: 14px 0;
`;

export const CreateNewBoard = styled.p`
  color: ${props => props.theme.sidebar.textMain};
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  width: 76px;
  cursor: pointer;
`;

export const BtnAdd = styled.button`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  background-color: ${props => props.theme.sidebar.addButtonBackground};
  border: none;
  outline: none;
  padding: 8px 10px;
  cursor: pointer;
  transition: all 150ms linear;

  :hover {
    background-color: ${props => props.theme.sidebar.addButtonHover};
  }
`;

export const IconPlus = styled.svg`
  height: 20px;
  width: 20px;
  stroke: ${props => props.theme.sidebar.addButtonColor};
`;

export const BtnLogOut = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const IconLogOut = styled.svg`
  height: 32px;
  width: 32px;
  stroke: ${props => props.theme.sidebar.iconLogout};
  fill: transparent;
  transition: all 150ms linear;

  :hover {
    opacity: 0.5;
  }
`;

export const TextLogOut = styled.p`
  color: ${props => props.theme.sidebar.textMain};
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
  transition: all 150ms linear;

  :hover {
    opacity: 0.5;
  }
`;

export const IconClose = styled.svg`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-45%);
  width: 20px;
  height: 20px;
  stroke: ${props => props.theme.sidebar.iconClose};
  fill: transparent;
  transition: all 150ms linear;

  :hover {
    opacity: 0.5;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
