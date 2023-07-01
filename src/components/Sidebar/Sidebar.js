import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUserTheme } from 'redux/auth/authSelectors';
import { selectIsMenuOpen } from 'redux/menuMode/menuModeSelectors';

import BoardList from './BoardList';
import NeedHelpBlock from 'components/Sidebar/NeedHelpBlock/NeedHelpBlock';
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
  IconClose,
} from './Sidebar.styled';
import { closeMenuMode } from 'redux/menuMode/menuModeSlice';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const activeUserTheme = useSelector(selectUserTheme);
  const menuMode = useSelector(selectIsMenuOpen);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const setIconLogo = () => {
    if (activeUserTheme === 'dark' || activeUserTheme === 'light') {
      return '#icon-logo';
    } else if (activeUserTheme === 'violet') {
      return '#icon-logo-violet';
    }
  };

  return (
    <Aside isOpen={menuMode}>
      <div style={{ width: '100%' }}>
        <Logo>
          <IconLogo aria-label="logo icon">
            <use href={sprite + setIconLogo()} />
          </IconLogo>

          <LogoText>Task Pro</LogoText>

          <IconClose onClick={() => dispatch(closeMenuMode())}>
            <use href={sprite + '#icon-x-close'} />
          </IconClose>
        </Logo>

        <MyBoardsText>My boards</MyBoardsText>

        <AddBoardBlock>
          <CreateNewBoard onClick={handleOpen}>
            Create a new board
          </CreateNewBoard>

          <BtnAdd type="button" onClick={handleOpen}>
            <IconPlus aria-label="add icon">
              <use href={sprite + `#icon-plus`} />
            </IconPlus>
          </BtnAdd>

          <BoardList />
        </AddBoardBlock>

        <BasicModal
          open={open}
          closeModal={handleClose}
          children={<AddBoardModal closeModal={handleClose} />}
        />
      </div>

      <div style={{ width: '100%' }}>
        <NeedHelpBlock />

        <BtnLogOut type="button" onClick={() => dispatch(logOut())}>
          <IconLogOut aria-label="logout icon">
            <use href={sprite + `#icon-login`} />
          </IconLogOut>

          <TextLogOut>Log out</TextLogOut>
        </BtnLogOut>
      </div>
    </Aside>
  );
};
