import { PopupWrapper, PopupItem, PopupText, PopupIcon } from './Card.styled';
import sprite from '../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectColumns } from 'redux/dashboards/dashboardsSelectors';
import { useDispatch } from 'react-redux';
import { changeColumn } from 'redux/dashboards/dashboardsOperations';

const CardmovePopup = ({ card, columnName }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);

  const filteredColumnNames = columns.filter(item => item.title !== columnName);


  const checkTextLength = text => {
    const str = text && text.split('');

    if (str.length <= 12) {
      return str.join('');
    }
    return str.splice(0, 8).join('') + '...';
  };

  const handleChangeColumn = (cardId, columnId, currentOwner) => {
    dispatch(changeColumn({ cardId, columnId, currentOwner }));
  };

  return (
    <PopupWrapper>
      {filteredColumnNames.map(item => (
        <PopupItem
          onClick={() => handleChangeColumn(card._id, item._id, card.owner)}
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
