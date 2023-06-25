import sprite from '../../images/sprite.svg';
import {
    Aside,
    Logo,
    IconLogo,
    LogoText,
    MyBoardsText,
  AddBoardBlock,
 CreateNewBoard,
    BtnAdd,
    IconPlus,
    BtnLogOut,
    IconLogOut,
     TextLogOut,
} from './Sidebar.styled';
import { ProjectList } from './ProjectList';
import NeedHelpBlock from 'components/NeedHelpBlock/NeedHelpBlock';

export const Sidebar = () => {
     return (
         <Aside >
             <Logo href="#">
                 <IconLogo aria-label="logo icon">
                     <use href={sprite + `#icon-logo`}/>
                 </IconLogo>
                 <LogoText>Task Pro</LogoText>
             </Logo>
             
             <MyBoardsText>My boards</MyBoardsText>
             <AddBoardBlock>
             <CreateNewBoard>Create a new board</CreateNewBoard>
                 <BtnAdd
                     type='button'
                     //onClick={ }
                 >
                      <IconPlus aria-label="add icon">
                     <use href={sprite + `#icon-plus`}/>
                 </IconPlus>
                 </BtnAdd>
             </AddBoardBlock>
             <ProjectList/>
             <NeedHelpBlock/>
             <BtnLogOut>
                 <IconLogOut aria-label="logout icon">
                     <use href={sprite + `#icon-login`}/>
                 </IconLogOut>
                 <TextLogOut>Log out</TextLogOut>
             </BtnLogOut>
       </Aside>
  );
};