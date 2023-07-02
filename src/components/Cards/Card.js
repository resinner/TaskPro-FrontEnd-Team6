import { useState, useRef, useEffect } from 'react';
import sprite from '../../images/sprite.svg';
import CardmovePopup from './Popitem';
import { useDispatch } from 'react-redux';

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
  IconBellWrapper,
} from './Card.styled';
import { deleteCard } from 'redux/dashboards/dashboardsOperations';

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const moveIconRef = useRef();

  const { title, _id, deadline, description, priority } = item;

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const today = new Date().toLocaleString('en-GB', options);
  const parsedDate = new Date(deadline);

  const formatedDeadline =
    parsedDate && parsedDate.toLocaleString('en-GB', options);

  // toggle popup func
  const handleIconMoveClick = () => setIsPopupOpen(!isPopupOpen);

  // text cutting func
  const checkTextLength = text => {
    const str = text.split('');

    if (str.length <= 80) {
      return str.join('');
    }
    return str.splice(0, 80).join('') + '...';
  };

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

  const expiredCard = today > formatedDeadline;

  return (
    <CardWrapper priority={priority} expired={expiredCard}>
      <TopWrapper>
        <Title>{title}</Title>

        <Text>{checkTextLength(description)}</Text>
      </TopWrapper>

      <BottomWrapper>
        <Stats>
          <Priority priority={priority}>{priority}</Priority>

          <Deadline>{formatedDeadline}</Deadline>
        </Stats>

        <IconsGroup>
          {today === formatedDeadline && (
            <>
              <IconBell aria-label="bell icon">
                <use href={sprite + `#icon-bell`} />
              </IconBell>
              <IconBellWrapper></IconBellWrapper>
            </>
          )}

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

          <ActiveIcon
            aria-label="edit icon"
            onClick={() => dispatch(deleteCard(_id))}
          >
            <use href={sprite + `#icon-trash`} />
          </ActiveIcon>
        </IconsGroup>
      </BottomWrapper>
    </CardWrapper>
  );
};

export default Card;
