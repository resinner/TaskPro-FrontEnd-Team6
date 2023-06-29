import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './ScreensPage.styled';
import { selectIsMenuOpen } from 'redux/menuMode/menuModeSelectors';
import { useEffect } from 'react';
import { closeMenuMode } from 'redux/menuMode/menuModeSlice';
<<<<<<< HEAD
import { ColumnTask } from 'components/Boards/ColumnTask/ColumnTask';
=======
import { useParams } from 'react-router-dom';
import { getDashboardById } from 'redux/dashboards/dashboardsOperations';
import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
>>>>>>> 375fd5bc2d27d92f32632b77129ac96f1b719c3d

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
      <ColumnTask />
      <HeaderDashboard children={currentDashboard?.name} />
    </Wrapper>
  );
};

export default ScreensPage;
