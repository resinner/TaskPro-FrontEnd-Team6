import { useState } from 'react';
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
  const [activePojectIndex, setActivePojectIndex] = useState(0);
  const switchActiveProject = index => setActivePojectIndex(index);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <List>
      {options.map((item, index) => (
        <Item
          key={index}
          className={activePojectIndex === index ? 'active' : ''}
          onClick={() => switchActiveProject(index)}
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
              {item}
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
