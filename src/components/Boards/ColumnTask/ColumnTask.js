import sprite from '../../../images/sprite.svg';

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

import Card from 'components/Cards/Card';

export const ColumnTask = ({ columnsLength }) => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>To Do</Title>

          <IconWrapper>
            <Icon>
              <use href={sprite + '#icon-pencil'} />
            </Icon>

            <Icon>
              <use href={sprite + '#icon-trash'} />
            </Icon>
          </IconWrapper>
        </Header>

        <TaskList columnsLength={columnsLength}>
          {/* {cardsArray.map(item => (
            <Card  />
          ))} */}
          <Card />
          <Card />
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
    </Wrapper>
  );
};
