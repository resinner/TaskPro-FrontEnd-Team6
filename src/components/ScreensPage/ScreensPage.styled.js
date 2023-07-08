import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  height: calc(100vh - 60px);

  background-image: url(${props => props.bgcUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 14px 20px 0 20px;

  margin-left: ${props => (props.isOpen ? '225px' : '0')};
  opacity: ${props => (props.isOpen ? '0.6' : '1')};
  transition: all 250ms linear;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 68px);
    padding: 26px 32px 0 32px;

    margin-left: ${props => (props.isOpen ? '260px' : '0')};
  }

  @media screen and (min-width: 1280px) {
    padding: 10px 24px 0 24px;
    margin-left: 260px;
  }
`;
