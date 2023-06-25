import React, { useState } from 'react';

import {
  FormWrapper,
  Section,
  AuthFormSubmitButton,
  PlusIcon,
  TitleInput,
  SectionTitle,
  LabelInput,
} from '../ColumnModal.styled';

const EditColumnModal = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(title);
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
        <PlusIcon />
        Add
      </AuthFormSubmitButton>
    </Section>
  );
};

export default EditColumnModal;
