import { PopupWrapper, PopupItem, PopupText, PopupIcon } from './Card.styled';
import sprite from '../../images/sprite.svg';

const CardmovePopup = () => {
  // text cutting func
  const checkTextLength = text => {
    const str = text.split('');

    if (str.length <= 12) {
      return str.join('');
    }
    return str.splice(0, 8).join('') + '...';
  };

  return (
    <PopupWrapper>
      {/* {dashboardsArra.map(item => item.name)} */}

      <PopupItem>
        <PopupText>{checkTextLength('In progress')}</PopupText>

        <PopupIcon>
          <use href={sprite + '#icon-arrow-circle-broken-right'} />
        </PopupIcon>
      </PopupItem>

      <PopupItem>
        <PopupText>{checkTextLength('Done')}</PopupText>

        <PopupIcon>
          <use href={sprite + '#icon-arrow-circle-broken-right'} />
        </PopupIcon>
      </PopupItem>

      <PopupItem>
        <PopupText>{checkTextLength('Future')}</PopupText>

        <PopupIcon>
          <use href={sprite + '#icon-arrow-circle-broken-right'} />
        </PopupIcon>
      </PopupItem>
    </PopupWrapper>
  );
};

export default CardmovePopup;
