import styled from 'styled-components';
//стилізувати скролл

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
  width: 260px;
  //scrollbar-width: none;
  //scrollbar-color: rgba(255, 255, 255, 1) #1F1F1F; /* «цвет ползунка» «цвет полосы скроллбара» */
  //scrollbar-width: 8px;
  //position: relative;
  /*tab*/
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    /* height: 380px; */
  }

  /*mob*/
  @media screen and (min-width: 768px) {
    /* height: 202px; */
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center; //горизонт
  height: 61px;
  padding: 20px 24px;
  margin-bottom: 4px;
  cursor: pointer;
  transition: all 150ms linear;

  :hover {
    background-color: ${props => props.theme.sidebar.projectHover};
  }

  &.active {
    background-color: ${props => props.theme.sidebar.projectActive};
    transition: all 150ms linear;

    ::after {
      content: '';
      display: block;
      position: absolute;
      height: 61px;
      width: 4px;
      right: 0px;
      background-color: ${props => props.theme.sidebar.projectBorder};
      border-radius: 4px 0px 0px 4px;
      opacity: 1;
    }
  }
`;

export const ProjectBlock = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center; //горизонт
  transition: all 150ms linear;
  text-decoration: none;
`;

//повинна міняти колір разом з назвою проекту
export const ProjectIcon = styled.svg`
  height: 18px;
  width: 18px;
  margin-right: 8px;
  fill: transparent;
  stroke: ${props => props.theme.sidebar.projectIcon};
  transition: all 150ms linear;

  &.active {
    stroke: ${props => props.theme.sidebar.projectIconHover};
  }
`;

export const ProjectTitle = styled.p`
  color: ${props => props.theme.sidebar.textSecondary};
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  transition: all 150ms linear;

  &.active {
    color: ${props => props.theme.sidebar.textMain};
  }
`;

export const IconsBlock = styled.div`
  display: flex;
`;

export const IconEdit = styled.svg`
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.sidebar.projectIcon};
  margin: 0 8px;
  transition: all 150ms linear;

  :hover {
    stroke: ${props => props.theme.sidebar.projectIconHover};
  }
`;

export const IconDel = styled.svg`
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.sidebar.projectIcon};
  transition: all 150ms linear;

  :hover {
    stroke: ${props => props.theme.sidebar.projectIconHover};
  }
`;
