import { useState, useRef, useEffect } from 'react';
import sprite from '../../images/sprite.svg';
import CardmovePopup from './Popitem';
import { useDispatch } from 'react-redux';

import {
  DelayIcon,
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
  PopupWrapper,
  PopupItem,
  PopupText,
} from './Card.styled';
import { deleteCard, editCard } from 'redux/dashboards/dashboardsOperations';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import EditCardModal from 'components/Modals/CardModal/EditCardModal/EditCardModal';

const Card = ({ item, columnName }) => {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [delayPopup, setDelayPopup] = useState(false);
  const moveIconRef = useRef();
  const [openCardModal, setOpenCardModal] = useState(false);
  const handleOpenCardModal = () => setOpenCardModal(true);
  const handleCloseCardModal = () => setOpenCardModal(false);

  const { title, _id, deadline, description, priority } = item;

  const delayOptions = [1, 3, 5, 7];

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const today = new Date().toLocaleString('en-GB', options);
  const parsedDate = new Date(deadline);

  const formatedDeadline =
    parsedDate && parsedDate.toLocaleString('en-GB', options);

  const handleIconMoveClick = () => setIsPopupOpen(!isPopupOpen);

  const checkTextLength = text => {
    const str = text.split('');

    if (str.length <= 80) {
      return str.join('');
    }
    return str.splice(0, 80).join('') + '...';
  };

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

  const handleDelayPopup = () => {
    setDelayPopup(prev => !prev);
  };

  const handleDeadline = (deadline, delay) => {
    const date = new Date(deadline);
    date.setDate(date.getDate() + delay);

    dispatch(
      editCard({ cardId: _id, title, description, priority, deadline: date })
    );

    setDelayPopup(prev => !prev);
  };

  return (
    <>
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

            {today > formatedDeadline && (
              <>
                <DelayIcon onClick={handleDelayPopup} />
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

              {delayPopup && (
                <PopupWrapper>
                  {delayOptions.map((item, idx) => (
                    <PopupItem
                      onClick={() => handleDeadline(deadline, item)}
                      key={idx}
                    >
                      <PopupText>
                        {item > 1 ? `${item} days delay` : `${item} day delay`}{' '}
                      </PopupText>
                    </PopupItem>
                  ))}
                </PopupWrapper>
              )}

              {isPopupOpen && (
                <CardmovePopup card={item} columnName={columnName} />
              )}
            </MoverWrapper>
            <ActiveIcon onClick={handleOpenCardModal} aria-label="edit icon">
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
      <BasicModal
        open={openCardModal}
        closeModal={handleCloseCardModal}
        children={
          <EditCardModal card={item} closeModal={handleCloseCardModal} />
        }
      />
    </>
  );
};

export default Card;
