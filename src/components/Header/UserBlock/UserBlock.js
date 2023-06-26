import { theme } from 'constants/theme';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelectors';
import { UserAvatar, UserName, Wrapper } from './UserBlock.styled';

import userDark from '../../../images/user-dark.svg';
import userLight from '../../..//images/user-light.svg';
import userViolet from '../../../images/user-violet.svg';

const UserBlock = () => {
  const activeTheme = useSelector(selectTheme);

  const setDefaultAvatar = () => {
    if (theme[activeTheme].name === 'Dark') {
      return userDark;
    } else if (theme[activeTheme].name === 'Light') {
      return userLight;
    } else if (theme[activeTheme].name === 'Violet') {
      return userViolet;
    }
  };

  return (
    <Wrapper>
      <UserName>User Name</UserName>

      <UserAvatar
        src={
          // user.avatar ||
          setDefaultAvatar()
        }
        alt="user name"
      />
    </Wrapper>
  );
};

export default UserBlock;
