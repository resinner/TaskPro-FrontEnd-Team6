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
  Icon,
  IconWrapper,
} from '../BoardModal.styled';
import defaultImg from '../../defImg.png';
import data from '../../background.json';
import sprite from '../../../../images/sprite.svg';

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

const AddBoardModal = () => {
  const [selectedBgc, setSelectedBgc] = useState('');
  const [setIcon, setSetIcon] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log([title, selectedBgc, setIcon]);
  };

  const handleBgcSelection = url => {
    setSelectedBgc(url);
  };

  const handleIconSelection = el => {
    setSetIcon(el);
  };

  return (
    <Section>
      <SectionTitle>New board</SectionTitle>

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
                    className={selectedBgc === el.url ? 'active' : ''}
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
        Create
      </AuthFormSubmitButton>
    </Section>
  );
};

export default AddBoardModal;
