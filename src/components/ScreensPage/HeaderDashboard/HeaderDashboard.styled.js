import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`;

export const Title = styled.h2`
  color: ${props => props.theme.header.userName};
  font-size: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.36px;
`;
