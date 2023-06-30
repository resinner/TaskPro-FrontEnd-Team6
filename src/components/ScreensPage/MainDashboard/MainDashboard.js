import AddButton from 'components/Boards/AddButton/AddButton';
import { ColumnTask } from 'components/Boards/ColumnTask/ColumnTask';
import { ContentWrapper, Wrapper } from './MainDashboard.styled';
import { useState } from 'react';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import AddColumnModal from 'components/Modals/ColumnModal/AddColumnModal';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectColumns,
  selectColumnsLength,
} from 'redux/dashboards/dashboardsSelectors';

const MainDashboard = () => {
  const columnLength = useSelector(selectColumnsLength);

  const { boardName } = useParams();
  const columns = useSelector(selectColumns);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper length={columnLength}>
      <ContentWrapper>
        {columns &&
          columns.map(item => <ColumnTask key={item._id} item={item} />)}
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
