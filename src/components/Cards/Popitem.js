import { PopupWrapper, PopupItem, PopupText, PopupIcon } from './Card.styled';
import sprite from '../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectColumns } from 'redux/dashboards/dashboardsSelectors';
import { useDispatch } from 'react-redux';
import { changeColumn } from 'redux/dashboards/dashboardsOperations';

const CardmovePopup = ({ cardId }) => {
  const dispatch = useDispatch();
  const colmuns = useSelector(selectColumns);
  // text cutting func
  const checkTextLength = text => {
    const str = text && text.split('');

    if (str.length <= 12) {
      return str.join('');
    }
    return str.splice(0, 8).join('') + '...';
  };

  const handleChangeColumn = (cardId, columnId) => {
    console.log('cardID', cardId);
    console.log('columnId', columnId);
    dispatch(changeColumn({ cardId, columnId }));
  };

  return (
    <PopupWrapper>
      {colmuns.map(item => (
        <PopupItem
          onClick={() => handleChangeColumn(cardId, item._id)}
          key={item._id}
        >
          <PopupText>{checkTextLength(item.title)}</PopupText>

          <PopupIcon>
            <use href={sprite + '#icon-arrow-circle-broken-right'} />
          </PopupIcon>
        </PopupItem>
      ))}
    </PopupWrapper>
  );
};

export default CardmovePopup;
