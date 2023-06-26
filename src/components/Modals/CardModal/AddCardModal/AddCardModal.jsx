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
  LabelInput,
  Label,
  PlusIcon,
  DefaultRadioBtn,
  LabelItem,
  RadioBtnWrapper,
  FormTitle,
  Wrapper,
  DateTitle,
  StyledContainer,
} from '../CardModal.styled';
import { toast } from 'react-toastify';

const options = ['low', 'medium', 'high', 'without'];
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

const AddCardModal = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedLabel, setSelectedLabel] = useState(options[3]);
  const [startDate, setStartDate] = useState('');

  const customDate =
    startDate !== ''
      ? `${startDate.getDate()}/0${
          startDate.getMonth() + 1
        }/${startDate.getFullYear()}`
      : null;

  const handleSubmit = evt => {
    evt.preventDefault();

    if (title.trim() !== '' && description.trim() !== '') {
      console.log([title, description, selectedLabel, customDate]);
      resetForm();
    } else {
      toast.error('All fields must be completed');
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setSelectedLabel('');
    setStartDate('');
  };

  return (
    <Section>
      <SectionTitle>Add Card</SectionTitle>

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

        <Textarea
          value={description}
          onChange={e => setDescription(e.currentTarget.value)}
          name="Description"
          placeholder="Description"
          cols="30"
          rows="10"
          maxLength={230}
        ></Textarea>
      </FormWrapper>

      <FormWrapper>
        <FormTitle>Label color </FormTitle>

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
        <DateTitle onClick={() => document.querySelector('.input-ref').click()}>
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

      <AuthFormSubmitButton onClick={handleSubmit} type="submit">
        <PlusIcon />
        Add
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

export default AddCardModal;
