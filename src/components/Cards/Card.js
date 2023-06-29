import {
    CardTitle,
    CardWrapper,
    CardDescription,
    IconsGroup,
    IconBell,
    IconMove,
    IconEdit,
    IconTrash,
    CardDivider,
    CardTopBlock,
    CardBottomBlock,
    CardInfoBlock,
    CardPriorityWrapper,
    PriorityValueWrapper,
    PriorityIndicator,
    Priority,
    PriorityValue,
    CardDeadlineWrapper,
    Deadline,
    DeadlineValue,
  } from './Card.styled';
  import React, { useState } from 'react';
  import sprite from '../../images/sprite.svg';
  import CardmovePopup from './Popitem1';
  
  const PRIORITY_VALUES = {
    low: 'Low',
    medium: 'Medium',
    high: 'High',
    without: 'Without',
  };
  
  const PRIORITY_INDICATORS = {
    low: '#8FA1D0',
    medium: '#E09CB5',
    high: '#BEDBB0',
    without: '#FFFFFF4D',
  };
  
  const Card = ({ cards }) => {
    const formattedDate = cards.deadline.toLocaleDateString('en-US');
  
    const mappedPriorityValue = PRIORITY_VALUES[cards.priority];
    const mappedPriorityIndicatorColor = PRIORITY_INDICATORS[cards.priority];
    const [isPopupOpen, setIsPopupOpen] = useState(false);
  
    const handleIconMoveClick = () => {
      setIsPopupOpen(true);
    };
  
  
    return (
      <CardWrapper
        style={{ borderLeft: `4px solid ${mappedPriorityIndicatorColor}` }}
      >
        <CardTopBlock>
          <CardTitle>{cards.title}</CardTitle>
          <CardDescription>{cards.description}</CardDescription>
        </CardTopBlock>
        <CardDivider />
        <CardBottomBlock>
          <CardInfoBlock>
            <CardPriorityWrapper>
              <Priority>Priority</Priority>
              <PriorityValueWrapper>
                <PriorityIndicator
                  style={{ backgroundColor: mappedPriorityIndicatorColor }}
                />
                <PriorityValue>{mappedPriorityValue}</PriorityValue>
              </PriorityValueWrapper>
            </CardPriorityWrapper>
            <CardDeadlineWrapper>
              <Deadline>Deadline</Deadline>
              <DeadlineValue>{formattedDate}</DeadlineValue>
            </CardDeadlineWrapper>
          </CardInfoBlock>
          <IconsGroup>
            <IconBell
              aria-label="bell icon"
              //onClick={}
            >
              <use href={sprite + `#icon-bell`} />
            </IconBell>
            <IconMove 
              aria-label="move card icon"
              onClick={handleIconMoveClick}
            >
              <use href={sprite + `#icon-arrow-circle-broken-right`} />
            </IconMove>
            {isPopupOpen && <CardmovePopup />}
            <IconEdit
              aria-label="edit icon"
              //onClick={}
            >
              <use href={sprite + `#icon-pencil`} />
            </IconEdit>
  
            <IconTrash
              aria-label="edit icon"
              //onClick={}
            >
              <use href={sprite + `#icon-trash`} />
            </IconTrash>
          </IconsGroup>
        </CardBottomBlock>
      </CardWrapper>
    );
  };
  
  export default Card;
  