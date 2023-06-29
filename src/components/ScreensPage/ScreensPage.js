import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './ScreensPage.styled';
import { selectIsMenuOpen } from 'redux/menuMode/menuModeSelectors';
import { useEffect } from 'react';
import { closeMenuMode } from 'redux/menuMode/menuModeSlice';
import { useParams } from 'react-router-dom';
import { getDashboardById } from 'redux/dashboards/dashboardsOperations';

import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';
import { selectAllDashboards } from 'redux/dashboards/dashboardsSelectors';

const ScreensPage = () => {
  const dispatch = useDispatch();

  const { boardName } = useParams();

  const menuMode = useSelector(selectIsMenuOpen);
  const currentDashboard = useSelector(
    state => state.dashboards.currentDashboard.dashboard
  );

  const allDash = useSelector(selectAllDashboards);
  const boardId = allDash.filter(item => item.name === boardName);

  useEffect(() => {
    dispatch(getDashboardById(boardId[0]?._id));
  }, [boardId, boardName, dispatch]);

  const handleScreenClick = () => {
    if (menuMode) {
      dispatch(closeMenuMode());
    }
  };

  return (
    <Wrapper
      onClick={handleScreenClick}
      bgcUrl={currentDashboard?.backgroundURL}
      isOpen={menuMode}
    >
      <HeaderDashboard children={currentDashboard?.name} />

      <MainDashboard />
    </Wrapper>
  );
};

export default ScreensPage;
