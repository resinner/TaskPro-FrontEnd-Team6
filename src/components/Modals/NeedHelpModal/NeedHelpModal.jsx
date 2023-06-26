import React, { useState } from 'react';
import { toast } from 'react-toastify';
import {
  FormWrapper,
  Section,
  AuthFormSubmitButton,
  TitleInput,
  SectionTitle,
  Textarea,
  LabelInput,
  StyledContainer,
} from './NeedHelpModal.styled';

const NeedHelpModal = () => {
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (title.trim() !== '' && comment.trim() !== '') {
      console.log([title, comment]);
      resetForm();
    } else {
      toast.error('All fields must be completed');
    }
  };

  const resetForm = () => {
    setTitle('');
    setComment('');
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

export default NeedHelpModal;
