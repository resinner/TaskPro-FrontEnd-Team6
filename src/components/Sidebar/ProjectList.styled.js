import styled from 'styled-components';
//стилізувати скролл
export const List = styled.ul`
height: 126px;
padding: 0px;
margin-bottom: 40px;
overflow-y: auto;
//scrollbar-width: none;
//scrollbar-color: rgba(255, 255, 255, 1) #1F1F1F; /* «цвет ползунка» «цвет полосы скроллбара» */
//scrollbar-width: 8px; 
//position: relative;
  /*tab*/
   @media screen and (min-width: 768px) and (max-width: 1199px){
    height: 380px;
}
   /*mob*/
  @media screen and (min-width: 768px) {
    height:202px;
  }
`;

export const Item = styled.li`
display: flex;
justify-content:space-between;
align-items:center;//горизонт
height: 61px;
color: #fff;
list-style: none; 
display: flex;
padding: 20px 0;
margin-bottom: 4px;
cursor: pointer;
:hover {
    background-color: rgba(31, 31, 31, 1);
  }   
  ::after {
     display: block;
     position: absolute;
     content: '';
     height: 61px;
     width: 4px;
     right: 0px;
     background-color: rgba(190, 219, 176, 1);
     border-radius: 4px 0px 0px 4px;
     opacity: 1;
 }
 `;
export const ProjectBlock = styled.a`
display: flex;
justify-content:space-between;
align-items:center;//горизонт
:hover {
   color: rgba(255, 255, 255, 1);
  }
  text-decoration: none;
`; 
//повинна міняти колір разом з назвою проекту
export const ProjectIcon  = styled.svg`
 height: 18px;
 width: 18px;
 margin-right: 8px;
 fill: rgba(18, 18, 18, 1);
  stroke:rgba(255, 255, 255, 0.5);
   :hover {
    stroke: rgba(255, 255, 255, 1);
  } 
`;
export const ProjectTitle = styled.p`
/*display:inline-block;
 width: 138px;
 max-height: 21 px;
  overflow: hidden;
  text-overflow: ellipsis;*/
color:  rgba(255, 255, 255, 0.50);
font-size: 14px;
font-family: Poppins;
font-weight: 500;
letter-spacing: -0.28px;
 :hover {
    color: rgba(255, 255, 255, 1);
  } 
`;
export const IconsBlock = styled.div`
display: flex;
`;
export const IconEdit  = styled.svg`
 height: 16px;
 width: 16px;
  fill: rgba(18, 18, 18, 1);
  stroke:rgba(255, 255, 255, 0.5);
  :hover {
    stroke: rgba(255, 255, 255, 1);
  }
  margin: 0 8px;
`;
export const IconDel  = styled.svg`
 height: 16px;
 width: 16px;
  fill: rgba(18, 18, 18, 1);
  stroke:rgba(255, 255, 255, 0.5);
  :hover {
    stroke: rgba(255, 255, 255, 1);
  }
`;