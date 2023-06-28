import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px);

  @media screen and (min-width: 768px) {
    height: calc(100vh - 68px);
  }

  @media screen and (min-width: 1280px) {
    padding-left: 260px;
  }
`;

export const Text = styled.h1`
  font-size: 50px;
  color: #fff;
  text-align: center;
`;
