import { useState } from 'react';
// import { Button } from './Button';
import { useToggleModal } from './useToggleModal';
import sprite from '../../../images/sprite.svg';
import BasicModal from '../../../components/Modals/BasicModal/BasicModal';

import {
  Column,
  HeaderColumn,
  List,
  Wrap,
  AuthFormSubmitButton,
  PlusIcon,
  ButtonPlus,
  TrashIcon,
  PensilIcon,
  TitleName,
} from './ColumnTask.Styled';
import AddBoardModal from 'components/Modals/BoardModal/AddBoardModal/AddBoardModal';
import Task from '../Task/Task';
import AddCardModal from 'components/Modals/CardModal/AddCardModal/AddCardModal';

export const ColumnTask = () => {
  const { open, close, isOpen } = useToggleModal();
  console.log(isOpen);

  return (
    <Column>
      <HeaderColumn>
        <TitleName>
          To Do
          <div>
            <PensilIcon>
              <use href={sprite + '#icon-pencil'} />
            </PensilIcon>
            <TrashIcon>
              <use href={sprite + '#icon-trash'} />
            </TrashIcon>
          </div>
        </TitleName>
      </HeaderColumn>

      <Task />

      <Wrap>
        <AuthFormSubmitButton onClick={open}>
          <ButtonPlus>
            <PlusIcon>
              <use href={sprite + '#icon-plus'} />
            </PlusIcon>
          </ButtonPlus>
          Add another card
        </AuthFormSubmitButton>
        <BasicModal
          open={isOpen}
          closeModal={close}
          children={<AddCardModal />}
        />
      </Wrap>
    </Column>
  );
};
