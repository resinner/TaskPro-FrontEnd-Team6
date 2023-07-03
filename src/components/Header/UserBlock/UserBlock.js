import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectUser,
  selectUserTheme,
} from 'redux/auth/authSelectors';

import userDark from '../../../images/user-dark.svg';
import userLight from '../../..//images/user-light.svg';
import userViolet from '../../../images/user-violet.svg';
import EditProfileModal from 'components/Modals/EditProfileModal/EditProfileModal';
import BasicModal from 'components/Modals/BasicModal/BasicModal';

import { UserAvatar, UserName, Wrapper } from './UserBlock.styled';
import Loader from 'components/AuthPage/Loader';

const UserBlock = () => {
  const isLoading = useSelector(selectIsLoading);
  const [open, setOpen] = useState(false);
  const activeUserTheme = useSelector(selectUserTheme);
  const { name, avatarURL } = useSelector(selectUser);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const setDefaultAvatar = () => {
    if (activeUserTheme === 'dark') {
      return userDark;
    } else if (activeUserTheme === 'light') {
      return userLight;
    } else if (activeUserTheme === 'violet') {
      return userViolet;
    }
  };

  return (
    <>
      <Wrapper>
        <UserName>{name[0].toUpperCase() + name.slice(1)}</UserName>

        {isLoading ? (
          <Loader />
        ) : (
          <UserAvatar
            src={avatarURL || setDefaultAvatar()}
            alt="user name"
            onClick={handleOpen}
          />
        )}
      </Wrapper>
      <BasicModal
        name="EditProfile"
        open={open}
        closeModal={handleClose}
        children={<EditProfileModal closeModal={handleClose} />}
      />
    </>
  );
};

export default UserBlock;
