import React from 'react';
import {
  ListItem,
  Span,
  TextHidden,
  Title,
  SubTitle,
  SubText,
  Wrap,
  PensilIcon,
  TrashIcon,
  ArrowIcon,
} from './Task.styled';
import sprite from '../../../images/sprite.svg';

const Task = () => {
  return (
    <ListItem>
      <Title>The Watch Spot Design</Title>
      <TextHidden>
        Create a visually stunning and eye-catching watch dial design that
        embodies our brand's essence of sleek aesthetics and modern elegance.
        Your design should be unique, innovative, and reflective of the latest
        trends in watch design.
      </TextHidden>
      <Span />
      <Wrap>
        <div>
          <SubTitle>Priority</SubTitle>
          <SubText>Low</SubText>
        </div>
        <div>
          <SubTitle>Deadline</SubTitle>
          <SubText>12/06/2023</SubText>
        </div>
        <div>
          <ArrowIcon>
            <use href={sprite + '#icon-arrow-circle-broken-right'} />
          </ArrowIcon>
          <PensilIcon>
            <use href={sprite + '#icon-pencil'} />
          </PensilIcon>
          <TrashIcon>
            <use href={sprite + '#icon-trash'} />
          </TrashIcon>
        </div>
      </Wrap>
    </ListItem>
  );
};

export default Task;
