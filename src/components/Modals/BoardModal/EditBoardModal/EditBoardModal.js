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
import data from '../../background.json';
import sprite from '../../../../images/sprite.svg';

import { Formik } from 'formik';
import * as Yup from 'yup';
import { editDashbord } from 'redux/dashboards/dashboardsOperations';
import { useDispatch } from 'react-redux';

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

const EditBoardModal = ({ closeModal, item }) => {
  const dispatch = useDispatch();
  const { _id, name, icon, backgroundURL } = item;
  const [selectedBg, setSelectedBg] = useState(backgroundURL);
  const [setIcon, setSetIcon] = useState(icon);

  const initialValues = {
    title: name,
    icon: setIcon,
    backgroundURL: selectedBg,
  };

  const handleSubmit = values => {
    const { title, icon, backgroundURL } = values;
    const updatedData = { name: title, icon, backgroundURL };
    dispatch(editDashbord({ dashboardId: _id, updatedData }));
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

                  <DefaultRadioBtn
                    type="radio"
                    value={el.url}
                    name="backgroundURL"
                  />
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
