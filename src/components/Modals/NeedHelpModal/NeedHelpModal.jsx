import React, { useState } from 'react';

import {
  FormWrapper,
  Section,
  AuthFormSubmitButton,
  TitleInput,
  SectionTitle,
  Textarea,
  LabelInput,
} from './NeedHelpModal.styled';

const NeedHelpModal = () => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log([title, comment]);
  };

  return (
    <Section>
      <SectionTitle>Need help</SectionTitle>

      <FormWrapper>
        <LabelInput>
          <TitleInput
            placeholder="Email address"
            type="email"
            name="email"
            value={title}
            onChange={e => setTitle(e.currentTarget.value)}
          />
        </LabelInput>

        <Textarea
          value={comment}
          onChange={e => setComment(e.currentTarget.value)}
          name="Comment"
          placeholder="Comment"
          cols="30"
          rows="10"
        ></Textarea>
      </FormWrapper>

      <AuthFormSubmitButton onClick={handleSubmit} type="submit">
        Send
      </AuthFormSubmitButton>
    </Section>
  );
};

export default NeedHelpModal;
