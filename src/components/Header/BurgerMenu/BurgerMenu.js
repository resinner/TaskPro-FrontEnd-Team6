import { useDispatch, useSelector } from 'react-redux';
import { openMenuMode } from 'redux/menuMode/menuModeSlice';
import { selectIsMenuOpen } from 'redux/menuMode/menuModeSelectors';
import sprite from '../../../images/sprite.svg';

import { Button, Icon } from './BurgerMenu.styled';

const BurgenMenu = () => {
  const dispatch = useDispatch();
  const menuMode = useSelector(selectIsMenuOpen);

  return (
    <Button
      type="button"
      onClick={() => dispatch(openMenuMode())}
      isOpen={menuMode}
    >
      <Icon>
        <use href={sprite + '#icon-menu'} />
      </Icon>
    </Button>
  );
};

export default BurgenMenu;
