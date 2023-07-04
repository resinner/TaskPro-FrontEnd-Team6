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
import { useDispatch } from 'react-redux';
import { editCard } from 'redux/dashboards/dashboardsOperations';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required!'),
  description: Yup.string()
    .max(230, 'Name must be at most 230 characters')
    .required('Description is required'),
});

const dateOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};

const options = ['low', 'medium', 'high', 'without'];

const EditCardModal = ({ card, closeModal }) => {
  const dispatch = useDispatch();
  const { _id, title, deadline, description, priority } = card;

  const [selectedLabel, setSelectedLabel] = useState(priority);
  const [startDate, setStartDate] = useState('');
  const customDate =
    startDate !== '' ? startDate.toLocaleString('en-GB', dateOptions) : null;

  const dateForEdit = new Date(deadline);
  const dateLabel = dateForEdit.toLocaleString('en-GB', dateOptions);

  const initialValues = {
    title,
    description,
    priority: selectedLabel,
  };

  let editedDeadline = startDate;

  const handleSubmit = (values, { resetForm }) => {
    const { title, description, priority } = values;

    if (editedDeadline === '') {
      editedDeadline = deadline;
    }

    dispatch(
      editCard({
        cardId: _id,
        title,
        description,
        priority,
        deadline: editedDeadline,
      })
    );
    resetForm();
    closeModal();
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
                  id="labelOut"
                >
                  <LabelItem
                    onClick={() => setSelectedLabel(el)}
                    value={el}
                    className={selectedLabel === el ? 'active' : ''}
                    id="labelIn"
                  />

                  <DefaultRadioBtn type="radio" value={el} name="priority" />
                </Label>
              ))}
            </RadioBtnWrapper>
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Deadline </FormTitle>
            <DateTitle
              onClick={() => document.querySelector('.input-ref').click()}
            >
              {startDate !== '' ? customDate : dateLabel}
            </DateTitle>
            <Wrapper>
              <DatePicker
                className="input-ref"
                minDate={new Date()}
                timeFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={date => setStartDate(date)}
                id="datePicker"
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
