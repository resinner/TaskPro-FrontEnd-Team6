import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserTheme } from 'redux/auth/authSelectors';
import { theme } from 'constants/theme';

import {
  Icon,
  PopupBlock,
  PopupItem,
  Text,
  Wrapper,
} from './ThemePicker.styled';
import sprite from '../../../images/sprite.svg';
import { changeTheme } from 'redux/auth/authOperations';

const ThemePicker = () => {
  const dispatch = useDispatch();

  const activeUserTheme = useSelector(selectUserTheme);
  const [isShownPopup, setIsShownPopup] = useState(false);
  const themeRef = useRef();

  const handleTheme = theme => {
    dispatch(changeTheme({ theme }));

    setIsShownPopup(false);
  };

  const handleOutsideClick = event => {
    const path = event.composedPath();

    if (!path.includes(themeRef.current)) {
      setIsShownPopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handlePopup = () => setIsShownPopup(!isShownPopup);

  return (
    <Wrapper ref={themeRef} onClick={handlePopup}>
      <Text>Theme</Text>
      <Icon isOpen={isShownPopup}>
        <use href={sprite + '#icon-chevron-down'} />
      </Icon>

      {isShownPopup && (
        <PopupBlock>
          {theme.map(({ name }) => (
            <PopupItem
              onClick={() => handleTheme(name)}
              key={name}
              className={activeUserTheme === name ? 'active' : ''}
            >
              {name[0].toUpperCase() + name.slice(1)}
            </PopupItem>
          ))}
        </PopupBlock>
      )}
    </Wrapper>
  );
};

export default ThemePicker;
