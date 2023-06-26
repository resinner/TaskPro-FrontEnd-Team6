import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const StyledContainer = styled(ToastContainer)`
  /* width: 300px;
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%); */

  .Toastify__toast {
    font-size: 14px;
    font-family: 'Poppins';
    font-weight: 500;
    letter-spacing: -0.28px;
    background-color: #f7432392;
    border-radius: 8px;
  }
`;

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

export const TitleInput = styled.input`
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-family: 'Poppins';
  font-size: 14px;
  letter-spacing: -0.28px;

  background-color: transparent;
  border: 1px solid ${props => props.theme.needHelpModal.border};
  outline: none;
  border-radius: 8px;

  opacity: 0.4;
  transition: all 250ms linear;
  color: ${props => props.theme.needHelpModal.textMain};

  &::placeholder {
    color: ${props => props.theme.needHelpModal.textMain};
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 120px;
  padding: 14px 18px;

  font-family: 'Poppins';
  font-size: 14px;
  letter-spacing: -0.28px;

  background-color: transparent;
  border: 1px solid ${props => props.theme.needHelpModal.border};
  border-radius: 8px;

  margin-top: 14px;

  outline: none;
  opacity: 0.4;
  transition: all 250ms linear;
  color: ${props => props.theme.needHelpModal.textMain};

  &::placeholder {
    color: ${props => props.theme.needHelpModal.textMain};
    font-size: 14px;
    font-family: Poppins;
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-bottom: 24px;
`;

export const Section = styled.form`
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
