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
  Icon,
  IconWrapper,
  ButtonPlus,
  ErrorSection,
  ModalForm,
} from '../BoardModal.styled';
import defaultImg from '../../defImg.png';
import data from '../../background.json';
import sprite from '../../../../images/sprite.svg';

import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required!'),
});

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

const EditBoardModal = ({ closeModal }) => {
  const [selectedBg, setSelectedBg] = useState('');
  const [setIcon, setSetIcon] = useState(options[0]);

  const initialValues = {
    title: '',
    icon: setIcon,
    bgc: selectedBg,
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
    closeModal();
  };

  const handleBgSelection = url => {
    setSelectedBg(url);
  };

  const handleIconSelection = el => {
    setSetIcon(el);
  };

  return (
    <Section>
      <SectionTitle>Edit board</SectionTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ModalForm>
          <FormWrapper>
            <ErrorSection name="title" component="div" />
            <TitleInput
              type="text"
              id="title"
              name="title"
              placeholder="Title"
            />
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

                  <DefaultRadioBtn type="radio" value={el} name="icon" />
                </IconWrapper>
              ))}
            </RadioBtnWrapper>
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Backgraunds </FormTitle>
            <RadioBtnWrapper>
              {data.map((el, idx) => (
                <label key={idx}>
                  <BgcItem
                    url={defaultImg}
                    onClick={() => handleBgSelection(el.url)}
                    className={selectedBg === el.url ? 'active' : ''}
                  >
                    {el.url !== '' && (
                      <CustomRadioBtn
                        url={el.url}
                        onClick={() => handleBgSelection(el.url)}
                        className={selectedBg === el.url ? 'active' : ''}
                      />
                    )}
                  </BgcItem>

                  <DefaultRadioBtn type="radio" value={el.url} name="bgc" />
                </label>
              ))}
            </RadioBtnWrapper>
          </FormWrapper>

          <AuthFormSubmitButton type="submit">
            <ButtonPlus>
              <PlusIcon>
                <use href={sprite + '#icon-plus'} />
              </PlusIcon>
            </ButtonPlus>
            Edit
          </AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </Section>
  );
};

export default EditBoardModal;
