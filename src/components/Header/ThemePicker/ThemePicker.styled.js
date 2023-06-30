import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin-right: 14px;
  cursor: pointer;
`;

export const Text = styled.span`
  font-family: Poppins;
  color: ${props => props.theme.themePopup.textMain};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.themePopup.icon};
  transition: all 250ms linear;
  fill: transparent;

  ${props => props.isOpen && 'transform: rotate(-180deg)'};
`;

export const PopupBlock = styled.ul`
  position: absolute;
  bottom: -124px;
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  padding: 18px 44px 18px 18px;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.themePopup.border};
  background: ${props => props.theme.themePopup.background};
  box-shadow: 0px 4px 16px 0px ${props => props.theme.themePopup.boxShadow};
  gap: 4px;
  z-index: 99;
`;

export const PopupItem = styled.li`
  font-family: Poppins;
  color: ${props => props.theme.themePopup.textSecondary};
  font-size: 14px;
  letter-spacing: -0.28px;

  &.active {
    color: ${props => props.theme.themePopup.textAccent};
  }

  cursor: pointer;
`;
