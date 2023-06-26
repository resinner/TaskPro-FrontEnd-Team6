import React, { useState } from 'react';
import {
  DefaultRadioBtn,
  CustomRadioBtn,
  BgcItem,
  FormWrapper,
  RadioBtnWrapper,
  FormTitle,
  Section,
  AuthFormSubmitButton,
  PlusIcon,
  TitleInput,
  SectionTitle,
  LabelInput,
  IconWrapper,
  Icon,
  StyledContainer,
} from '../BoardModal.styled';
import defaultImg from '../../defImg.png';
import data from '../../background.json';
import sprite from '../../../../images/sprite.svg';
import { toast } from 'react-toastify';

const options = [
  '#icon-Project',
  '#icon-star',
  '#icon-loading',
  '#icon-puzzle-piece',
  '#icon-container',
  '#icon-lightning',
  '#icon-colors',
  '#icon-hexagon',
];

const EdidBoardModal = () => {
  const [selectedBgc, setSelectedBgc] = useState('');
  const [setIcon, setSetIcon] = useState(options[0]);
  const [title, setTitle] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    if (title.trim() !== '') {
      console.log([title, selectedBgc, setIcon]);
    } else {
      toast.error('Title is required!');
    }
  };

  const handleBgcSelection = url => {
    setSelectedBgc(url);
  };

  const handleIconSelection = el => {
    setSetIcon(el);
  };

  return (
    <Section>
      <SectionTitle>Edit board</SectionTitle>

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

      <FormWrapper>
        <FormTitle>Icons </FormTitle>

        <RadioBtnWrapper>
          {options.map((el, idx) => (
            <IconWrapper key={idx}>
              <Icon
                className={setIcon === el ? 'active' : ''}
                onClick={() => handleIconSelection(el)}
                width={18}
                height={18}
              >
                <use href={sprite + el} width={18} height={18} />
              </Icon>

              <DefaultRadioBtn type="radio" value={el} name="bgc" />
            </IconWrapper>
          ))}
        </RadioBtnWrapper>
      </FormWrapper>

      <FormWrapper>
        <FormTitle>Background </FormTitle>

        <RadioBtnWrapper>
          {data.map((el, idx) => (
            <label key={idx}>
              <BgcItem
                url={defaultImg}
                onClick={() => handleBgcSelection(el.url)}
                className={selectedBgc === el.url ? 'active' : ''}
              >
                {el.url !== '' && (
                  <CustomRadioBtn
                    url={el.url}
                    onClick={() => handleBgcSelection(el.url)}
                  />
                )}
              </BgcItem>
              <DefaultRadioBtn type="radio" value={el.url} name="bgc" />
            </label>
          ))}
        </RadioBtnWrapper>
      </FormWrapper>

      <AuthFormSubmitButton onClick={handleSubmit} type="submit">
        <PlusIcon />
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

export default EdidBoardModal;
