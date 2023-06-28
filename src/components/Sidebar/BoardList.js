import { useSelector } from 'react-redux';
import { selectAllDashboards } from 'redux/dashboards/dashboardsSelectors';

import BoardItem from './BoardItem/BoardItem';
import { List } from './BoardList.styled';
import { useState } from 'react';

const BoardList = () => {
  const dashboards = useSelector(selectAllDashboards);
  const [activePojectIndex, setActivePojectIndex] = useState(0);

  const switchActiveProject = index => setActivePojectIndex(index);

  return (
    <List>
      {dashboards.map((item, index) => (
        <BoardItem
          key={item._id}
          item={item}
          index={index}
          onActive={switchActiveProject}
          activePojectIndex={activePojectIndex}
        />
      ))}
    </List>
  );
};

export default BoardList;
