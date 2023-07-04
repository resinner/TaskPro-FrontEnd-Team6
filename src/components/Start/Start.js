import { selectIsMenuOpen } from 'redux/menuMode/menuModeSelectors';
import { AccentText, Text, Wrapper } from './Start.styled';
import { useSelector } from 'react-redux';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import AddBoardModal from 'components/Modals/BoardModal/AddBoardModal/AddBoardModal';
import { useState } from 'react';

const Start = () => {
  const menuMode = useSelector(selectIsMenuOpen);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Wrapper isOpen={menuMode}>
        <Text>
          Before starting your project, it is essential{' '}
          <AccentText onClick={handleOpen}>to create a board</AccentText> to
          visualize and track all the necessary tasks and milestones. This board
          serves as a powerful tool to organize the workflow and ensure
          effective collaboration among team members.
        </Text>
      </Wrapper>

      <BasicModal
        open={open}
        closeModal={handleClose}
        children={<AddBoardModal closeModal={handleClose} />}
      />
    </>
  );
};

export default Start;
