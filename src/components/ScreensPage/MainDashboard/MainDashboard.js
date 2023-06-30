import AddButton from 'components/Boards/AddButton/AddButton';
import { ColumnTask } from 'components/Boards/ColumnTask/ColumnTask';
import { ContentWrapper, Wrapper } from './MainDashboard.styled';
import { useState } from 'react';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import AddColumnModal from 'components/Modals/ColumnModal/AddColumnModal/AddColumnModal';
import { useParams } from 'react-router-dom';

const MainDashboard = () => {
  const { boardName } = useParams();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <ContentWrapper>
        {/* {columns.map(item => (
          <ColumnTask />
        ))} */}
        <ColumnTask />
        <AddButton openModal={handleOpen} />
      </ContentWrapper>

      <BasicModal
        open={open}
        closeModal={handleClose}
        children={
          <AddColumnModal dashboardId={boardName} closeModal={handleClose} />
        }
      />
    </Wrapper>
  );
};

export default MainDashboard;
