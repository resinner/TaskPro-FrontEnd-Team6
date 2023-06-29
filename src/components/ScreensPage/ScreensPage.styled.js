import styled from 'styled-components';

export const Wrapper = styled.div`
<<<<<<< HEAD
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
=======
>>>>>>> 375fd5bc2d27d92f32632b77129ac96f1b719c3d
  height: calc(100vh - 60px);

  background-image: url(${props => props.bgcUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 14px 20px;

  margin-left: ${props => (props.isOpen ? '225px' : '0')};
  transition: all 250ms linear;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 68px);
    padding: 26px 32px;

    margin-left: ${props => (props.isOpen ? '260px' : '0')};
  }

  @media screen and (min-width: 1280px) {
    padding: 10px 24px 0 10px;
    margin-left: 260px;
  }
`;

