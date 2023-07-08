import styled from 'styled-components';

export const Header = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(233, 248, 248, 0.2);
  padding: 0 32px;
`;

export const Title = styled.h2`
  color: ${props => props.theme.header.userName};
  font-size: 22px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.36px;
`;
