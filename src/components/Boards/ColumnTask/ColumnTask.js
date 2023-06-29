import sprite from '../../../images/sprite.svg';

import {
  Wrapper,
  Header,
  AuthFormSubmitButton,
  PlusIcon,
  ButtonPlus,
  TaskList,
  IconWrapper,
  Icon,
  Content,
  Title,
} from './ColumnTask.Styled';

import Task from '../Task/Task';

export const ColumnTask = () => {
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

        <TaskList>
          <Task />
          <Task />
          <Task />
          <Task />
        </TaskList>
      </Content>

      <AuthFormSubmitButton>
        <ButtonPlus>
          <PlusIcon>
            <use href={sprite + '#icon-plus'} />
          </PlusIcon>
        </ButtonPlus>
        Add another card
      </AuthFormSubmitButton>
    </Wrapper>
  );
};
