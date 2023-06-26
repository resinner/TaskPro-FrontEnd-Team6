import { useState } from 'react';
import { theme } from 'constants/theme';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelectors';

import { ProjectList } from './ProjectList';
import NeedHelpBlock from 'components/NeedHelpBlock/NeedHelpBlock';

import BasicModal from 'components/Modals/BasicModal/BasicModal';
import AddBoardModal from 'components/Modals/BoardModal/AddBoardModal/AddBoardModal';

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

export const Sidebar = () => {
  const activeTheme = useSelector(selectTheme);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const setIconLogo = () => {
    if (
      theme[activeTheme].name === 'Dark' ||
      theme[activeTheme].name === 'Light'
    ) {
      return '#icon-logo';
    } else if (theme[activeTheme].name === 'Violet') {
      return '#icon-logo-violet';
    }
  };

  return (
    <Aside>
      <div style={{ width: '100%' }}>
        <Logo to="/">
          <IconLogo aria-label="logo icon">
            <use href={sprite + setIconLogo()} />
          </IconLogo>

          <LogoText>Task Pro</LogoText>
        </Logo>

        <MyBoardsText>My boards</MyBoardsText>

        <AddBoardBlock onClick={handleOpen}>
          <CreateNewBoard>Create a new board</CreateNewBoard>

          <BtnAdd
            type="button"
            //onClick={ }
          >
            <IconPlus aria-label="add icon">
              <use href={sprite + `#icon-plus`} />
            </IconPlus>

            <BasicModal
              name="AddBoardModal"
              open={open}
              closeModal={handleClose}
              children={<AddBoardModal />}
            />
          </BtnAdd>

          <ProjectList />
        </AddBoardBlock>
      </div>

      <div style={{ width: '100%' }}>
        <NeedHelpBlock />

        <BtnLogOut>
          <IconLogOut aria-label="logout icon">
            <use href={sprite + `#icon-login`} />
          </IconLogOut>

          <TextLogOut>Log out</TextLogOut>
        </BtnLogOut>
      </div>
    </Aside>
  );
};
