import styled from 'styled-components';
//import styled from "@emotion/styled";

export const Aside = styled.aside`
position:relative;
 background-color: #121212;
  width: 260px; 
  //height: 770px;
  padding: 24px; 
 /*tab*/
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 260px;
    //height: 1024px;
  } 
/*mob*/
  @media screen and (max-width: 767px) {
    width: 225px;
    //height:812px;
    padding: 14px 14px 24px;
  }
`;

export const Logo = styled.a`
  display: flex;
  text-decoration: none;
  margin-bottom: 60px;
`;
export const IconLogo = styled.svg`
height: 32px;
width: 32px;
//stroke: rgba(31, 31, 31, 1);
fill:rgba(255, 255, 255, 1);
`;

export const LogoText = styled.h1`
color: #fff;
font-size: 16px;
font-family: Poppins;
font-weight: 600;
letter-spacing: -0.64px;
margin-left: 8px;
`;

export const MyBoardsText = styled.p`
color:rgba(255, 255, 255, 0.50);
font-size: 12px;
font-family: Poppins;
letter-spacing: -0.24px;
margin-bottom: 8px;
`;
export const AddBoardBlock = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border-top: 1px solid rgba(255, 255, 255, 0.1);
border-bottom: 1px solid rgba(255, 255, 255, 0.1);
margin-bottom: 40px;
padding: 14px 0;
`;
export const CreateNewBoard = styled.p`
  color: #fff;
font-size: 14px;
font-family: Poppins;
font-weight: 500;
letter-spacing: -0.28px;
width: 76px;

`;
export const BtnAdd = styled.button`
 width: 40px;
 height: 36px;
  border-radius: 6px;
  background-color: #BEDBB0;
  border: none;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
 padding: 8px 10px;
`;
export const IconPlus = styled.svg`
height: 20px;
width: 20px;
stroke: rgba(18, 18, 18, 1);
`;

export const BtnLogOut = styled.button`
    background-color: #121212;
    display: flex;
    column-gap: 14px;
    justify-content: center;
    align-items: center;
    border: none;
   padding-right: 7px;
   cursor: pointer;
    `;
export const IconLogOut = styled.svg`
    height: 32px;
    width: 32px;
    stroke:rgba(190, 219, 176, 1);
    fill: rgba(18, 18, 18, 1);
     :hover{
      stroke:rgba(255, 255, 255, 0.50);
    }
    `;
export const TextLogOut = styled.p`
  color: #FFF;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
   :hover{
      color:rgba(255, 255, 255, 0.50);
    }
    `;
     
     