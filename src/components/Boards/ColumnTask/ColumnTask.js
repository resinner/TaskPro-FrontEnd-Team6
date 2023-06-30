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

// import Card from 'components/Cards/Card';

export const ColumnTask = ({ item }) => {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>{item.title}</Title>

          <IconWrapper>
            <Icon>
              <use href={sprite + '#icon-pencil'} />
            </Icon>

            <Icon>
              <use href={sprite + '#icon-trash'} />
            </Icon>
          </IconWrapper>
        </Header>

        <TaskList>
          {/* {cardsArray.map(item => (
            <Card  />
          ))} */}
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
