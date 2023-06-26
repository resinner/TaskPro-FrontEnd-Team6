import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  background: ${props => props.theme.container.background};
  width: 100%;

  /* max-height: 100vh; */
  /* height: 100%; */
  height: 100vh;

  @media screen and (min-width: 375px) {
    /* width: 375px; */
  }

  @media screen and (min-width: 768px) {
    /* width: 768px; */
  }

  @media screen and (min-width: 1280px) {
    /* width: 1280px; */
  }
`;
