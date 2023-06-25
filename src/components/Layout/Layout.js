import styled from 'styled-components';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;


export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  background-color: #161616;

  @media screen and (min-width: 375px) {
    width: 375px;
    height: 60px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 68px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;


export const Layout = ({ children }) => {
  return (
    <Container>
      <Header>Header</Header>
      <main>{ children } This is main</main>
      <footer>Footer</footer>
    </Container>
  )
}