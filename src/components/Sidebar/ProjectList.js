import { useEffect, useRef, useState } from 'react';
import sprite from '../../images/sprite.svg';
import {
  List,
  Item,
  ProjectBlock,
  ProjectIcon,
  ProjectTitle,
  IconsBlock,
  IconEdit,
  IconDel,
} from './ProjectList.styled';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import EditBoardModal from 'components/Modals/BoardModal/EditBoardModal/EditBoardModal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsMenuOpen } from 'redux/menuMode/menuModeSelectors';
import { closeMenuMode } from 'redux/menuMode/menuModeSlice';

const options = [
  'Project_1 Project_1',
  'Project_2 Project_2',
  'Project_3 Project_3',
  'Project_4 Project_4',
  'Project_4 Project_4',
  'Project_4 Project_4',
  'Project_4 Project_4',
]; // test array

export const ProjectList = () => {
  const dispatch = useDispatch();

  const menuMode = useSelector(selectIsMenuOpen);
  const [activePojectIndex, setActivePojectIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const projectRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOutsideClick = event => {
    const path = event.composedPath();

    if (path.includes(projectRef.current) && menuMode) {
      dispatch(closeMenuMode());
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const switchActiveProject = index => setActivePojectIndex(index);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const checkTextLength = text => {
    const str = text.split('');

    if (str.length <= 10) {
      return str.join('');
    }

    return str.splice(0, 10).join('') + '...';
  };

  return (
    <List>
      {options.map((item, index) => (
        <Item
          key={index}
          className={activePojectIndex === index ? 'active' : ''}
          onClick={() => {
            dispatch(closeMenuMode());
            switchActiveProject(index);
          }}
          ref={projectRef}
        >
          <ProjectBlock href="#">
            <ProjectIcon
              className={activePojectIndex === index ? 'active' : ''}
            >
              <use href={sprite + `#icon-Project`} />
            </ProjectIcon>

            <ProjectTitle
              className={activePojectIndex === index ? 'active' : ''}
            >
              {checkTextLength(item)}
            </ProjectTitle>
          </ProjectBlock>

          <IconsBlock>
            <IconEdit aria-label="edit icon" onClick={handleOpen}>
              <use href={sprite + `#icon-pencil`} />
            </IconEdit>

            <IconDel
              aria-label="delit icon"
              //onClick={}
            >
              <use href={sprite + `#icon-trash`} />
            </IconDel>
          </IconsBlock>
        </Item>
      ))}

      <BasicModal
        open={open}
        closeModal={handleClose}
        children={<EditBoardModal closeModal={handleClose} />}
      />
    </List>
  );
};
