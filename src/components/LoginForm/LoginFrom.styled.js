import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const AuthFormWrapper = styled.div`
  position: relative;

  .auth-form__error-message {
    margin: 0;
    color: #bab0b0;
    font-size: 12px;
  }
`;

export const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ErrorSection = styled(ErrorMessage)`
  margin-top: 3px;
  padding-left: 14px;
  color: #c04d4d;
  font-size: 12px;
`;

export const AuthFormField = styled(Field)`
  width: calc(100%);
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: Poppins;
  letter-spacing: -0.28px;

  color: #ffffff;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  outline: none;
  transition: all 150ms ease;

  opacity: 0.4;

  &::placeholder {
    color: #fff;
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const AuthFormPasswordIcon = styled.span`
  position: absolute;
  bottom: 15px;
  right: 18px;
  color: #fff;
  opacity: 0.4;
  cursor: pointer;
`;

export const AuthFormSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 49px;
  padding: 14px;
  border: none;
  margin-top: 10px;
  background: #bedbb0;
  border-radius: 8px;

  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #161616;

  transition: all 150ms linear;

  &:hover {
    opacity: 0.8;
  }

  cursor: pointer;
`;
