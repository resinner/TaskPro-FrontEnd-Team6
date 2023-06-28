import styled from 'styled-components';

export const Button = styled.button`
  z-index: 999;

  ${props => (props.isOpen ? 'opacity: 0' : 'opacity: 1')};

  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: none;
  outline: none;
  background-color: transparent;

  cursor: pointer;

  @media screen and (min-width: 1280px) {
    opacity: 0;
  }
`;

export const Icon = styled.svg`
  width: 32px;
  height: 32px;
  stroke: ${props => props.theme.header.menuIcon};
`;
