import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteDashboard } from 'redux/dashboards/dashboardsOperations';

import sprite from '../../../images/sprite.svg';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import EditBoardModal from 'components/Modals/BoardModal/EditBoardModal/EditBoardModal';
import {
  IconDel,
  IconEdit,
  IconsBlock,
  Item,
  ProjectBlock,
  ProjectIcon,
  ProjectTitle,
} from './BoardItem.styled';
import { closeMenuMode } from 'redux/menuMode/menuModeSlice';

const BoardItem = ({ item, index, onActive, activePojectIndex }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const checkTextLength = text => {
    const str = text.split('');

    if (str.length <= 10) {
      return str.join('');
    }

    return str.splice(0, 10).join('') + '...';
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Item className={activePojectIndex === index ? 'active' : ''}>
        <ProjectBlock
          onClick={() => {
            dispatch(closeMenuMode());
            onActive(index);
          }}
        >
          <ProjectIcon className={activePojectIndex === index ? 'active' : ''}>
            <use href={sprite + item.icon} />
          </ProjectIcon>

          <ProjectTitle className={activePojectIndex === index ? 'active' : ''}>
            {checkTextLength(item.name)}
          </ProjectTitle>
        </ProjectBlock>

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
      </Item>

      <BasicModal
        open={open}
        closeModal={handleClose}
        children={<EditBoardModal closeModal={handleClose} />}
      />
    </>
  );
};

export default BoardItem;