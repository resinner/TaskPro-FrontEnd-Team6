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
