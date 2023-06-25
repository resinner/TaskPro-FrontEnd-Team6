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
//import NeedHelpBlock from 'components/NeedHelpBlock/NeedHelpBlock';
//import React, { useState } from 'react';

export const ProjectList = () => {
    return (
    <List>
            <Item>
                 <ProjectBlock  href='#'>
                <ProjectIcon>
                     <use href={sprite + `#icon-Project`}/>
                </ProjectIcon>
                     <ProjectTitle>Project1 Project1</ProjectTitle>
                </ProjectBlock>
                <IconsBlock> 
                <IconEdit aria-label="edit icon"
                //onClick={}
                >
                         <use href={sprite + `#icon-pencil`}/>
                        
                     </IconEdit>
                <IconDel aria-label="delit icon"
                //onClick={}
                >
                          <use href={sprite + `#icon-trash`}/>
                     </IconDel>
                 </IconsBlock>
            </Item>
             <Item>Project2 Project2</Item>
            <Item>Project3 Project3</Item> 
        </List>
    );
}