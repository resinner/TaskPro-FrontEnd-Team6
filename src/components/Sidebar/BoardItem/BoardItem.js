import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  deleteDashboard,
  getDashboardById,
} from 'redux/dashboards/dashboardsOperations';
import { closeMenuMode } from 'redux/menuMode/menuModeSlice';

import sprite from '../../../images/sprite.svg';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import EditBoardModal from 'components/Modals/BoardModal/EditBoardModal/EditBoardModal';
import {
  Board,
  BoardIcon,
  BoardTitle,
  IconDel,
  IconEdit,
  IconsBlock,
  Item,
  StyledLink,
} from './BoardItem.styled';

const BoardItem = ({ item, index, onActive, activePojectIndex }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const checkTextLength = text => {
    const str = text.split('');

    if (str.length <= 10) {
      return str.join('');
    }
    return str.splice(0, 10).join('') + '...';
  };

  const handleDragStart = event => {
    event.preventDefault();
  };

  const handleContextMenu = event => {
    event.preventDefault();
  };

  return (
    <>
      <Item
        className={activePojectIndex === index ? 'active' : ''}
        draggable={false}
        onDragStart={handleDragStart}
        onContextMenu={handleContextMenu}
      >
        <StyledLink to={`${item.name}`}>
          <Board>
            <BoardIcon className={activePojectIndex === index ? 'active' : ''}>
              <use href={sprite + item.icon} />
            </BoardIcon>

            <BoardTitle
              onClick={() => {
                onActive(index);
                dispatch(closeMenuMode());
                dispatch(getDashboardById(item._id));
              }}
              className={activePojectIndex === index ? 'active' : ''}
            >
              {checkTextLength(item.name)}
            </BoardTitle>
          </Board>
          <IconsBlock>
            <IconEdit aria-label="edit icon" onClick={handleOpen}>
              <use href={sprite + `#icon-pencil`} />
            </IconEdit>

            <IconDel
              aria-label="delit icon"
              onClick={() => {
                dispatch(deleteDashboard(item._id));
              }}
            >
              <use href={sprite + `#icon-trash`} />
            </IconDel>
          </IconsBlock>
        </StyledLink>
      </Item>

      <BasicModal
        open={open}
        closeModal={handleClose}
        children={<EditBoardModal item={item} closeModal={handleClose} />}
      />
    </>
  );
};

export default BoardItem;
