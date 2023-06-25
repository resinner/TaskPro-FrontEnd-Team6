import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from 'redux/theme/themeSelectors';
import { setActiveTheme } from 'redux/theme/themeSlice';
import { theme } from 'constants/theme';

import {
  Icon,
  PopupBlock,
  PopupItem,
  Text,
  Wrapper,
} from './ThemePicker.styled';
import sprite from '../../images/sprite.svg';

const ThemePicker = () => {
  const dispatch = useDispatch();

  const activeTheme = useSelector(selectTheme);
  const [isShownPopup, setIsShownPopup] = useState(false);
  const themeRef = useRef();

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

  const handleTheme = index => {
    dispatch(setActiveTheme(index));
    setIsShownPopup(false);
  };

  return (
    <Wrapper ref={themeRef} onClick={handlePopup}>
      <Text>Theme</Text>
      <Icon isOpen={isShownPopup}>
        <use href={sprite + '#icon-chevron-down'} />
      </Icon>

      {isShownPopup && (
        <PopupBlock>
          {theme.map((item, index) => (
            <PopupItem
              onClick={() => handleTheme(index)}
              key={item.name}
              className={activeTheme === index ? 'active' : ''}
            >
              {item.name}
            </PopupItem>
          ))}
        </PopupBlock>
      )}
    </Wrapper>
  );
};

export default ThemePicker;
