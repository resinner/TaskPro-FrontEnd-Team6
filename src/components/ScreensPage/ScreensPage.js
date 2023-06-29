import { useDispatch, useSelector } from 'react-redux';
import { Text, Wrapper } from './ScreensPage.styled';
import { selectIsMenuOpen } from 'redux/menuMode/menuModeSelectors';
import { useEffect, useRef } from 'react';
import { closeMenuMode } from 'redux/menuMode/menuModeSlice';
import { ColumnTask } from 'components/Boards/ColumnTask/ColumnTask';

const ScreensPage = () => {
  const dispatch = useDispatch();
  const menuMode = useSelector(selectIsMenuOpen);
  const screenRef = useRef();

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
    <Wrapper ref={screenRef}>
      <ColumnTask />
      <Text>Попавсь ?</Text>
    </Wrapper>
  );
};

export default ScreensPage;
