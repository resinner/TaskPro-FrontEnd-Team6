import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: calc(-100% - 18px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 334px;
  height: 56px;
  border-radius: 8px;
  background: #121212;
  outline: none;
  border: none;

  padding: 14px 79px;
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const IconWrapper = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
`;

export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: #000;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  width: 150px;
`;
