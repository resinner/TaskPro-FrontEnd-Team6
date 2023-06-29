import styled from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100vh - 60px);

  background-image: url(${props => props.bgcUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 14px 20px;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 68px);
    padding: 26px 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 10px 24px 0 10px;
    margin-left: 260px;
  }
`;

export const HeaderDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  color: ${props => props.theme.header.userName};
  font-size: 18px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

