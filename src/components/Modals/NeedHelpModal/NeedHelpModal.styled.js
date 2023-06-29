import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-bottom: 24px;
  color: ${props => props.theme.needHelpModal.textMain};
`;

export const LabelInput = styled.label`
  width: 100%;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-bottom: 24px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const AuthFormSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 8px;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;

  color: ${props => props.theme.needHelpModal.buttonColor};
  background-color: ${props => props.theme.needHelpModal.buttonBackground};

  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const TitleInput = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  background-color: ${props => props.theme.editProfileModal.background};
  border: 1px solid ${props => props.theme.editProfileModal.inputBorder};
  border-radius: 8px;
  outline: none;

  opacity: 0.4;
  transition: all 250ms ease;
  color: ${props => props.theme.editProfileModal.textMain};

  &::placeholder {
    color: ${props => props.theme.editProfileModal.textMain};
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }
`;

export const Textarea = styled(Field)`
  resize: none;
  width: 100%;
  height: 154px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  background-color: ${props => props.theme.editProfileModal.background};
  border: 1px solid ${props => props.theme.editProfileModal.inputBorder};
  outline: none;
  border-radius: 8px;

  color: ${props => props.theme.editProfileModal.textMain};
  transition: all 250ms ease;
  opacity: 0.4;

  margin-top: 14px;

  &::placeholder {
    color: ${props => props.theme.editProfileModal.textMain};
    font-size: 14px;
    font-family: 'Poppins';
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
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
