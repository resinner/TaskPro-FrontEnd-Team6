import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeMenuMode, toggleMenuMode } from 'redux/menuMode/menuModeSlice';
import { selectIsMenuOpen } from 'redux/menuMode/menuModeSelectors';
import sprite from '../../../images/sprite.svg';

import { Button, Icon } from './BurgerMenu.styled';

const BurgenMenu = () => {
  const dispatch = useDispatch();
  const menuMode = useSelector(selectIsMenuOpen);
  const menuRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOutsideClick = event => {
    const path = event.composedPath();

    if (!path.includes(menuRef.current) && menuMode) {
      dispatch(closeMenuMode());
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <Button
      type="button"
      onClick={() => dispatch(toggleMenuMode())}
      isOpen={menuMode}
      ref={menuRef}
    >
      <Icon>
        <use href={sprite + '#icon-menu'} />
      </Icon>
    </Button>
  );
};

export default BurgenMenu;
