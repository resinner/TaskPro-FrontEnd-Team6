import { useDispatch } from 'react-redux';
import { useState } from 'react';
import sprite from '../../../images/sprite.svg';
import { deleteColumn } from 'redux/dashboards/dashboardsOperations';
import Card from 'components/Cards/Card';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import EditColumnModal from 'components/Modals/ColumnModal/EditColumnModal/EditColumnModal';
import {
  Wrapper,
  Header,
  Button,
  PlusIcon,
  ButtonPlus,
  TaskList,
  IconWrapper,
  Icon,
  Content,
  Title,
} from './ColumnTask.Styled';

export const ColumnTask = ({ item }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>{item.title}</Title>

          <IconWrapper>
            <Icon onClick={handleOpen}>
              <use href={sprite + '#icon-pencil'} />
            </Icon>

            <Icon onClick={() => dispatch(deleteColumn(item._id))}>
              <use href={sprite + '#icon-trash'} />
            </Icon>
          </IconWrapper>
        </Header>

        <TaskList>
          {/* {cardsArray.map(item => (
            <Card  />
          ))} */}
          <Card />
          <Card />
          <Card />
        </TaskList>
      </Content>

      <Button>
        <ButtonPlus>
          <PlusIcon>
            <use href={sprite + '#icon-plus'} />
          </PlusIcon>
        </ButtonPlus>
        Add another card
      </Button>

      <BasicModal
        open={open}
        closeModal={handleClose}
        children={
          <EditColumnModal columnId={item._id} closeModal={handleClose} />
        }
      />
    </Wrapper>
  );
};
