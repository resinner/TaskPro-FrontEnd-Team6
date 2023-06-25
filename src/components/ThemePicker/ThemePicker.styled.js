import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  background-color: #000;
  width: 100%;
  height: 80px;

  margin-top: 14px;
`;

export const Text = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: rgba(255, 255, 255, 0.8);
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
  border: 1px solid ${props => props.theme.popupAccent};
  background: ${props => props.theme.popupBG};
  box-shadow: 0px 4px 16px 0px ${props => props.theme.popupShadow};
  gap: 10px;
`;

export const PopupItem = styled.li`
  color: ${props => props.theme.popupSecondaryText};
  font-size: 14px;
  font-family: Poppins;
  letter-spacing: -0.28px;

  &.active {
    color: ${props => props.theme.popupAccent};
  }

  cursor: pointer;
`;
