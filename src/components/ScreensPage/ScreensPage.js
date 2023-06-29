import { useDispatch, useSelector } from 'react-redux';
import { HeaderDashboard, Title, Wrapper } from './ScreensPage.styled';
import { selectIsMenuOpen } from 'redux/menuMode/menuModeSelectors';
import { useEffect, useRef } from 'react';
import { closeMenuMode } from 'redux/menuMode/menuModeSlice';

const ScreensPage = () => {
  const dispatch = useDispatch();

  const menuMode = useSelector(selectIsMenuOpen);
  const screenRef = useRef();
  const currentDashboard = useSelector(
    state => state.dashboards.currentDashboard.dashboard
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOutsideClick = event => {
    const path = event.composedPath();

    if (path.includes(screenRef.current) && menuMode) {
      dispatch(closeMenuMode());
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <Wrapper
      ref={screenRef}
      bgcUrl={currentDashboard?.backgroundURL}
      isOpen={menuMode}
    >
      <HeaderDashboard>
        <Title>{currentDashboard?.name}</Title>
      </HeaderDashboard>
    </Wrapper>
  );
};

export default ScreensPage;
