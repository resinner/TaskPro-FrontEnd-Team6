import styled from '@emotion/styled';
import { BsFillPlusSquareFill } from 'react-icons/bs';

export const Section = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const SectionTitle = styled.h2`
  color: #fff;
  font-size: 18px;
  font-family: Poppins;
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

export const TitleInput = styled.input`
  width: 100%;
  height: 49px;
  padding: 14px 18px;
  background: #1f1f1f;
  background-color: rgba(31, 31, 31, 1);
  opacity: 0.4;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #ffffff;

  &::placeholder {
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-family: Poppins;
    letter-spacing: -0.28px;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 154px;
  padding: 14px 18px;
  background: #1f1f1f;
  background-color: rgba(31, 31, 31, 1);
  opacity: 0.4;
  border: 1px solid #bedbb0;
  box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-top: 14px;

  &::placeholder {
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-family: Poppins;
    letter-spacing: -0.28px;
  }
`;

export const AuthFormSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding: 14px;
  border: none;
  background: #bedbb0;
  border-radius: 8px;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #161616;
`;

export const DefaultRadioBtn = styled.input`
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
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-family: Poppins;
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
      props.value === 'without' && '2px solid rgba(255, 255, 255, 0.3)'};
    border: ${props =>
      props.value === 'low' && '2px solid rgba(143, 161, 208, 1)'};
    border: ${props =>
      props.value === 'medium' && '2px solid rgba(224, 156, 181, 1)'};
    border: ${props =>
      props.value === 'high' && '2px solid rgba(190, 219, 176, 1)'};
  }
`;

export const LabelItem = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${props =>
    props.value === 'without' && 'rgba(255, 255, 255, 0.30)'};
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

export const PlusIcon = styled(BsFillPlusSquareFill)`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;

export const Wrapper = styled.div`
  position: relative;
  .react-datepicker {
    margin-top: -28px;
    border-radius: 8px;
    border: 1px solid #bedbb0;
    background: #1f1f1f;
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

    &__navigation-icon {
      width: 4px;
      height: 8px;
      color: rgba(190, 219, 176, 1);
    }

    &__month {
      margin: 0;
    }

    &__week {
      color: #fff;
      font-size: 14px;
      font-family: Poppins;
      line-height: 18px;
      letter-spacing: -0.28px;

      &:last-of-type {
        margin-bottom: 18px;
      }
    }

    &__day {
      color: #fff;
      font-size: 14px;
      font-family: Poppins;
      width: 1.5rem;

      &--outside-month {
        color: rgba(255, 255, 255, 0.2);
        font-size: 14px;
        font-family: Poppins;
        line-height: 18px;
        letter-spacing: -0.28px;
      }
      &--keyboard-selected {
        border-radius: 24px;
        background: #bedbb0;
        color: #1f1f1f;
      }

      &:hover {
        border-radius: 24px;
        background: #bedbb0;
        color: #1f1f1f;
      }
    }

    &__day--disabled {
      color: rgba(255, 255, 255, 0.2);
      font-size: 14px;
      font-family: Poppins;
      line-height: 18px;
      letter-spacing: -0.28px;
    }

    &__day--selected {
      border-radius: 24px;
      background: #bedbb0;
      color: #1f1f1f;
    }

    &__triangle {
      display: none;
    }

    &__header {
      background: #1f1f1f;
      width: 231px;
      border-bottom: none;
      padding: 18px 18px 14px;
    }

    &__day-names {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 9px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    &__day-name {
      color: rgba(255, 255, 255, 0.5);
      font-size: 14px;
      font-family: Poppins;
      font-weight: 500;
      letter-spacing: -0.28px;
      margin-bottom: 0;
    }

    &__current-month {
      color: #fff;
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
  color: #bedbb0;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;
