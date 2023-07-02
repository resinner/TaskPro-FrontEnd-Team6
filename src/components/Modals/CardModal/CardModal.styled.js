import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const SectionTitle = styled.h2`
  color: ${props => props.theme.modal.textMain};
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-bottom: 24px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 14px;
  }
`;

export const LabelInput = styled.label`
  width: 100%;
`;

export const TitleInput = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  background-color: ${props => props.theme.modal.backgroundMain};
  border: 1px solid ${props => props.theme.modal.buttonBackground};
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  outline: none;
  border-radius: 8px;

  color: ${props => props.theme.modal.textMain};
  transition: all 250ms ease;
  opacity: 0.4;

  &::placeholder {
    color: ${props => props.theme.modal.textMain};
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const Textarea = styled(Field)`
  resize: none;
  width: 100%;
  height: 154px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  margin-top: 14px;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);

  background-color: ${props => props.theme.modal.backgroundMain};
  border: 1px solid ${props => props.theme.modal.buttonBackground};
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  outline: none;
  border-radius: 8px;

  color: ${props => props.theme.modal.textMain};
  transition: all 250ms ease;
  opacity: 0.4;

  &::placeholder {
    color: ${props => props.theme.modal.textMain};
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const AuthFormSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 14px;
  border: none;
  background: ${props => props.theme.modal.buttonBackground};
  border-radius: 8px;

  font-family: 'Poppins';
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: ${props => props.theme.modal.buttonText};

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const DefaultRadioBtn = styled(Field)`
  appearance: none;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const FormTitle = styled.h3`
  color: ${props => props.theme.modal.textSecondary};
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.24px;
  margin-bottom: 4px;
`;

export const RadioBtnWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const Label = styled.label`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 14px;

  cursor: pointer;

  &.active {
    border: ${props =>
      props.value === 'without' && '2px solid rgb(128,128,128)'};
    border: ${props =>
      props.value === 'low' && '2px solid rgba(143, 161, 208, 1)'};
    border: ${props =>
      props.value === 'medium' && '2px solid rgba(224, 156, 181, 1)'};
    border: ${props =>
      props.value === 'high' && '2px solid rgba(190, 219, 176, 1)'};
  }
`;

// need fix grey color
export const LabelItem = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${props => props.value === 'without' && 'rgb(128,128,128)'};
  background-color: ${props =>
    props.value === 'low' && 'rgba(143, 161, 208, 1)'};
  background-color: ${props =>
    props.value === 'medium' && 'rgba(224, 156, 181, 1)'};
  background-color: ${props =>
    props.value === 'high' && 'rgba(190, 219, 176, 1)'};

  transition: all 250ms linear;

  &.active {
    width: 6px;
    height: 6px;
  }
`;

export const ButtonPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.modal.plusBackground};
  margin-right: 8px;
  padding: 7px;
`;

export const PlusIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.modal.plusColor};
`;

export const ErrorSection = styled(ErrorMessage)`
  padding-left: 14px;
  color: #c04d4d;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const ModalForm = styled(Form)`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 233px;

  .react-datepicker {
    overflow: hidden;

    margin-top: -28px;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.modal.buttonBackground};

    background: ${props => props.theme.modal.backgroundMain};
    outline: none;
    width: 233px;
    position: absolute;
    right: -307px;
    top: -190px;

    &__input-container {
      appearance: none;
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;

      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    }

    &__navigation {
      position: absolute;
      top: 8px;
    }

    &__navigation-icon {
      width: 4px;
      height: 8px;
      color: ${props => props.theme.modal.textAccent};
    }

    &__month {
      margin: 0;
    }

    &__week {
      color: ${props => props.theme.modal.unactiveDay};
      font-size: 14px;
      font-family: Poppins;
      line-height: 18px;
      letter-spacing: -0.28px;

      &:last-of-type {
        margin-bottom: 18px;
      }
    }

    &__day {
      width: 24px;
      height: 24px;
      color: ${props => props.theme.modal.textMain};
      font-size: 14px;
      font-family: Poppins;
      width: 1.5rem;

      transition: all 250ms ease;

      &--today {
        color: ${props => props.theme.modal.today};
        background: ${props => props.theme.modal.buttonBackground};
        border-radius: 50%;
      }

      &--outside-month {
        width: 24px;
        height: 24px;
        color: ${props => props.theme.modal.unactiveDay};
      }

      &--keyboard-selected {
        border-radius: 24px;
        background: ${props => props.theme.modal.buttonBackground};
        color: ${props => props.theme.modal.today};
      }

      &:hover {
        border-radius: 24px;
        background: ${props => props.theme.modal.buttonBackground};
        color: ${props => props.theme.modal.today};
      }
    }

    &__day--disabled {
      width: 24px;
      height: 24px;
      color: ${props => props.theme.modal.unactiveDay};
    }

    &__day--selected {
      border-radius: 24px;
      background: ${props => props.theme.modal.buttonBackground};
      color: ${props => props.theme.modal.today};
    }

    &__triangle {
      display: none;
    }

    &__header {
      background-color: ${props => props.theme.modal.backgroundMain};
      width: 231px;
      border-bottom: none;
      padding: 18px 18px 14px;
    }

    &__day-names {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      border-top: 1px solid ${props => props.theme.modal.unactiveDay};
      padding-top: 14px;
    }

    &__day-name {
      color: ${props => props.theme.modal.textSecondary};
      font-size: 14px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.28px;
    }

    &__current-month {
      color: ${props => props.theme.modal.textMain};
      font-size: 16px;
      font-family: Poppins;
      font-weight: 500;
      letter-spacing: -0.32px;
      margin-bottom: 14px;
    }
  }
  .react-datepicker__input-container input {
  }
`;

export const DateTitle = styled.div`
  color: ${props => props.theme.modal.buttonBackground};
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;

  cursor: pointer;
`;
