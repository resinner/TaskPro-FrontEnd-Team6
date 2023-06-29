import AddButton from 'components/Boards/AddButton/AddButton';
import { ColumnTask } from 'components/Boards/ColumnTask/ColumnTask';
import { ContentWrapper, Wrapper } from './MainDashboard.styled';

const MainDashboard = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ColumnTask />
        <AddButton />
      </ContentWrapper>
    </Wrapper>
  );
};

export default MainDashboard;
