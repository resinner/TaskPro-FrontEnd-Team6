import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './ScreensPage.styled';
import { selectIsMenuOpen } from 'redux/menuMode/menuModeSelectors';
import { useEffect } from 'react';
import { closeMenuMode } from 'redux/menuMode/menuModeSlice';
import { useParams } from 'react-router-dom';
import { getDashboardById } from 'redux/dashboards/dashboardsOperations';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';

const ScreensPage = () => {
  const dispatch = useDispatch();

  const { boardName } = useParams();

  const menuMode = useSelector(selectIsMenuOpen);
  const currentDashboard = useSelector(
    state => state.dashboards.currentDashboard.dashboard
  );

  useEffect(() => {
    dispatch(getDashboardById(boardName));
  }, [boardName, dispatch]);

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
    </Wrapper>
  );
};

export default ScreensPage;
