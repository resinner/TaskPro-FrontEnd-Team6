import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  FormWrapper,
  Section,
  AuthFormSubmitButton,
  TitleInput,
  SectionTitle,
  Textarea,
  Label,
  PlusIcon,
  DefaultRadioBtn,
  LabelItem,
  RadioBtnWrapper,
  FormTitle,
  Wrapper,
  DateTitle,
  ModalForm,
  ErrorSection,
  ButtonPlus,
} from '../CardModal.styled';
import sprite from '../../../../images/sprite.svg';

import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required!'),
  description: Yup.string()
    .max(230, 'Name must be at most 230 characters')
    .required('Description is required'),
});

const options = ['Without', 'Low', 'Medium', 'High'];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const today = new Date();
const month = months[today.getMonth()];
const day = today.getDate();
const formattedDate = `${month} ${day}`;

const EditCardModal = () => {
  const [selectedLabel, setSelectedLabel] = useState(options[3]);
  const [startDate, setStartDate] = useState('');
  const customDate =
    startDate !== ''
      ? `${startDate.getDate()}/0${
          startDate.getMonth() + 1
        }/${startDate.getFullYear()}`
      : null;

  const initialValues = {
    title: '',
    description: '',
    label: selectedLabel,
    deadline: customDate,
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Section>
      <SectionTitle>Edit Card</SectionTitle>

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

            <ErrorSection name="description" component="div" />
            <Textarea
              component="textarea"
              name="description"
              id="description"
              type="text"
              placeholder="Description"
            />
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Icons </FormTitle>
            <RadioBtnWrapper>
              {options.map((el, idx) => (
                <Label
                  key={idx}
                  value={el}
                  className={selectedLabel === el ? 'active' : ''}
                >
                  <LabelItem
                    onClick={() => setSelectedLabel(el)}
                    value={el}
                    className={selectedLabel === el ? 'active' : ''}
                  />

                  <DefaultRadioBtn type="radio" value={el} name="bgc" />
                </Label>
              ))}
            </RadioBtnWrapper>
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Deadline </FormTitle>
            <DateTitle
              onClick={() => document.querySelector('.input-ref').click()}
            >
              {startDate !== '' ? customDate : `Today, ${formattedDate}`}
            </DateTitle>
            <Wrapper>
              <DatePicker
                className="input-ref"
                minDate={new Date()}
                timeFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
            </Wrapper>
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

export default EditCardModal;
