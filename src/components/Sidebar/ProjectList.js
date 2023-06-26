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
            <IconEdit
              aria-label="edit icon"
              //onClick={}
            >
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
    </List>
  );
};
