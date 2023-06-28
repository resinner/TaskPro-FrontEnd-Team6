import styled from 'styled-components';

export const List = styled.ul`
  position: absolute;
  left: 50%;
  top: -100%;
  transform: translate(-50%, calc(100% + 40px));
  max-height: 126px;
  padding: 0;
  margin-bottom: 40px;
  overflow-y: scroll;
  scroll-behavior: auto;
  width: 225px;
  height: 126px;

  @media screen and (min-width: 768px) {
    width: 260px;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`;
