import { useState, useRef, useEffect } from 'react';
import sprite from '../../images/sprite.svg';
import CardmovePopup from './Popitem';

import {
  Title,
  CardWrapper,
  Text,
  IconsGroup,
  IconBell,
  TopWrapper,
  BottomWrapper,
  Stats,
  Priority,
  Deadline,
  ActiveIcon,
  MoverWrapper,
} from './Card.styled';

const Card = () => {
  // const formattedDate = cards.deadline.toLocaleDateString('en-US');

  // const date = new Date();

  // const options = {
  //   year: 'numeric',
  //   month: '2-digit',
  //   day: '2-digit',
  // };

  // console.log('date', date.toLocaleString('en-US', options));
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const moveIconRef = useRef();

  // toggle popup func
  const handleIconMoveClick = () => setIsPopupOpen(!isPopupOpen);

  // text cutting func
  const checkTextLength = text => {
    const str = text.split('');

    if (str.length <= 88) {
      return str.join('');
    }
    return str.splice(0, 88).join('') + '...';
  };

  // test text DONT DELETE
  const demoTextString =
    "Create a visually stunning and eye-catching watch dial design that embodies our brand's essence of sleek aesthetics and modern elegance. Your design should be unique, innovative, and reflective of the latest trends in watch design.";

  // backdrop closing popup func
  const handleOutsideClick = event => {
    const path = event.composedPath();

    if (!path.includes(moveIconRef.current)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <CardWrapper>
      <TopWrapper>
        <Title>Card Title{/* {cards.title} */}</Title>

        <Text>{checkTextLength(demoTextString)}</Text>
      </TopWrapper>

      <BottomWrapper>
        <Stats>
          <Priority>Low</Priority>

          <Deadline>12/05/2023</Deadline>
        </Stats>

        <IconsGroup>
          <IconBell aria-label="bell icon">
            <use href={sprite + `#icon-bell`} />
          </IconBell>

          <MoverWrapper>
            <ActiveIcon
              ref={moveIconRef}
              aria-label="move card icon"
              onClick={handleIconMoveClick}
            >
              <use href={sprite + `#icon-arrow-circle-broken-right`} />
            </ActiveIcon>

            {isPopupOpen && <CardmovePopup />}
          </MoverWrapper>

          <ActiveIcon aria-label="edit icon">
            <use href={sprite + `#icon-pencil`} />
          </ActiveIcon>

          <ActiveIcon aria-label="edit icon">
            <use href={sprite + `#icon-trash`} />
          </ActiveIcon>
        </IconsGroup>
      </BottomWrapper>
    </CardWrapper>
  );
};

export default Card;
