import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const AuthFormWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;

  .auth-form__error-message {
    margin: 0;
    color: #bab0b0;
    font-size: 12px;
  }
`;

export const AuthForm = styled(Form)`
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const ErrorSection = styled(ErrorMessage)`
  margin-top: 3px;
  padding-left: 14px;
  color: #c04d4d;
  font-size: 12px;
`;

export const AuthFormField = styled(Field)`
  width: calc(100%);
  padding: 14px 18px;
  margin-bottom: 14px;
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
`;

export const AuthFormPasswordIcon = styled.span`
  position: absolute;
  bottom: 26px;
  right: 18px;
  color: #fff;
  opacity: 0.4;
  cursor: pointer;
`;

export const AuthFormSubmitButton = styled.button`
  margin-top: 10px;
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
