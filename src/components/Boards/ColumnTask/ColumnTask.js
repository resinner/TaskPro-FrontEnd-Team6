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
  ContentWrapper,
} from './ColumnTask.Styled';
import AddCardModal from 'components/Modals/CardModal/AddCardModal/AddCardModal';

export const ColumnTask = ({ item }) => {
  const dispatch = useDispatch();

  const [openColumnModal, setOpenColumnModal] = useState(false);
  const [openCardModal, setOpenCardModal] = useState(false);

  const handleOpenColumnModal = () => setOpenColumnModal(true);
  const handleCloseColumnModal = () => setOpenColumnModal(false);

  const handleOpenCardModal = () => setOpenCardModal(true);
  const handleCloseCardModal = () => setOpenCardModal(false);

  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <Header>
            <Title>{item.title}</Title>

            <IconWrapper>
              <Icon onClick={handleOpenColumnModal}>
                <use href={sprite + '#icon-pencil'} />
              </Icon>

              <Icon onClick={() => dispatch(deleteColumn(item._id))}>
                <use href={sprite + '#icon-trash'} />
              </Icon>
            </IconWrapper>
          </Header>

          <TaskList>
            {item.cards &&
              item.cards.map(item => <Card key={item._id} item={item} />)}
          </TaskList>
        </Content>

        <Button onClick={handleOpenCardModal}>
          <ButtonPlus>
            <PlusIcon>
              <use href={sprite + '#icon-plus'} />
            </PlusIcon>
          </ButtonPlus>
          Add another card
        </Button>
      </ContentWrapper>
      <BasicModal
        open={openColumnModal}
        closeModal={handleCloseColumnModal}
        children={
          <EditColumnModal
            columnId={item._id}
            closeModal={handleCloseColumnModal}
          />
        }
      />

      <BasicModal
        open={openCardModal}
        closeModal={handleCloseCardModal}
        children={
          <AddCardModal columnId={item._id} closeModal={handleCloseCardModal} />
        }
      />
    </Wrapper>
  );
};
