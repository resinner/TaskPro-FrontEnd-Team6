import React, { useState } from 'react';

import {
  FormWrapper,
  Section,
  AuthFormSubmitButton,
  PlusIcon,
  TitleInput,
  SectionTitle,
  LabelInput,
  ButtonPlus,
  StyledContainer,
} from '../ColumnModal.styled';
import sprite from '../../../../images/sprite.svg';
import { toast } from 'react-toastify';

const EditColumnModal = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (title.trim() !== '') {
      console.log(title);
    } else {
      toast.error('Title is required!');
    }
  };
  return (
    <Section>
      <SectionTitle>Edit column</SectionTitle>

      <FormWrapper>
        <LabelInput>
          <TitleInput
            placeholder="Title"
            type="text"
            name="title"
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
          />
        </LabelInput>
      </FormWrapper>

      <AuthFormSubmitButton onClick={handleSubmit} type="submit">
        <ButtonPlus>
          <PlusIcon>
            <use href={sprite + '#icon-plus'} />
          </PlusIcon>
        </ButtonPlus>
        Edit
      </AuthFormSubmitButton>
      <StyledContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Section>
  );
};

export default EditColumnModal;
