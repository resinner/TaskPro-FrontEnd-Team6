import { useSelector } from 'react-redux';
import { selectAllDashboards } from 'redux/dashboards/dashboardsSelectors';

import BoardItem from './BoardItem/BoardItem';
import { List } from './BoardList.styled';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenuMode } from 'redux/menuMode/menuModeSlice';

const BoardList = () => {
  const dashboards = useSelector(selectAllDashboards);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const listRef = useRef(null);
  const isMouseDownRef = useRef(false);
  const lastClientYRef = useRef(0);
  const dispatch = useDispatch();

  const switchActiveProject = index => {
    setActiveProjectIndex(index);
  };

  const handleActiveProject = index => {
    switchActiveProject(index);
    dispatch(closeMenuMode());
  };

  const handleMouseDown = event => {
    isMouseDownRef.current = true;
    lastClientYRef.current = event.clientY;
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
  };

  const handleMouseMove = event => {
    if (!isMouseDownRef.current || event.buttons !== 1) return;

    const delta = (event.clientY - lastClientYRef.current) * 4;
    lastClientYRef.current = event.clientY;

    if (listRef.current) {
      listRef.current.scrollTop += delta;
    }
  };

  return (
    <List
      ref={listRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {dashboards.map((item, index) => (
        <BoardItem
          key={item._id}
          item={item}
          index={index}
          onActive={handleActiveProject}
          activeProjectIndex={activeProjectIndex}
        />
      ))}
    </List>
  );
};

export default BoardList;
