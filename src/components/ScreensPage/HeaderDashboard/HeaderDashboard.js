import Filter from '../Filter/Filter';
import { Header, Title } from './HeaderDashboard.styled';

const HeaderDashboard = ({ children }) => {
  return (
    <Header>
      <Title>{children}</Title>

      <Filter />
    </Header>
  );
};

export default HeaderDashboard;
