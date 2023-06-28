import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.header.background};
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 375px) {
    /* width: 375px; */
    height: 60px;
  }

  @media screen and (min-width: 768px) {
    /* width: 768px; */
    height: 68px;
    padding: 18px 32px;
  }

  @media screen and (min-width: 1280px) {
    /* width: 1180px; */
    padding: 18px 24px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
