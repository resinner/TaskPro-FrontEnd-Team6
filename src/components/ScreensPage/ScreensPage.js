import { useDispatch, useSelector } from 'react-redux';
import { Wrapper } from './ScreensPage.styled';
import { selectIsMenuOpen } from 'redux/menuMode/menuModeSelectors';
import { closeMenuMode } from 'redux/menuMode/menuModeSlice';

import HeaderDashboard from './HeaderDashboard/HeaderDashboard';
import MainDashboard from './MainDashboard/MainDashboard';
import { selectCurrentDashboard } from 'redux/dashboards/dashboardsSelectors';

const ScreensPage = () => {
  const dispatch = useDispatch();

  const menuMode = useSelector(selectIsMenuOpen);
  const currentDashboard = useSelector(selectCurrentDashboard);

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
