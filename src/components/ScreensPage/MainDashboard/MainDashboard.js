import React, { useState, useRef } from 'react';
import AddButton from 'components/Boards/AddButton/AddButton';
import { ColumnTask } from 'components/Boards/ColumnTask/ColumnTask';
import { ContentWrapper, Wrapper } from './MainDashboard.styled';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import AddColumnModal from 'components/Modals/ColumnModal/AddColumnModal';
import { useSelector } from 'react-redux';
import {
  selectColumns,
  selectColumnsLength,
  selectCurrentDashboard,
} from 'redux/dashboards/dashboardsSelectors';

const MainDashboard = () => {
  const columnLength = useSelector(selectColumnsLength);
  const currentDashboard = useSelector(selectCurrentDashboard);
  const columns = useSelector(selectColumns);

  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const scrollRef = useRef(null);
  const [startX, setStartX] = useState(0);

  const handleOpen = () => {
    setOpen(true);
    setIsDragging(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setIsDragging(true);
  };

  const handleMouseDown = e => {
    if (e.button === 0) {
      const target = e.target.tagName.toLowerCase();
      if (target !== 'input' && target !== 'textarea') {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
      }
    }
  };

  const handleMouseMove = e => {
    if (!isDragging || open) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 0.05;
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - walk;
  };

  const handleMouseUp = e => {
    if (e.button === 0) {
      setIsDragging(false);
    }
  };

  return (
    <Wrapper length={columnLength} ref={scrollRef}>
      <ContentWrapper
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {columns &&
          columns.map(item => <ColumnTask key={item._id} item={item} />)}

        <AddButton openModal={handleOpen} />
      </ContentWrapper>

      <BasicModal
        open={open}
        closeModal={handleCloseModal}
        children={
          <AddColumnModal
            dashboardId={currentDashboard?._id}
            closeModal={handleCloseModal}
          />
        }
      />
    </Wrapper>
  );
};

export default MainDashboard;
