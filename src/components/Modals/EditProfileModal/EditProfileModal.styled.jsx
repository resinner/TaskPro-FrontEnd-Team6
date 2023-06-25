import styled from '@emotion/styled';

import { Form, Field, ErrorMessage } from 'formik';

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: baseline;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 18px;
  margin: 0;
  /* font-family: Poppins; */
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin: 24px auto 25px;
  border-radius: 8px;
  width: 68px;
  height: 68px;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  background-color: #161616;
`;

export const CustomButton = styled.button`
  position: absolute;
  bottom: -20%;
  left: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  padding: 0;
  width: 28px;
  height: 28px;
  border: none;

  cursor: pointer;
  background-color: rgba(190, 219, 176, 1);
`;

export const UserImage = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  object-fit: fill;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const AuthFormWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
`;

export const ErrorSection = styled(ErrorMessage)`
  margin-top: 3px;
  padding-left: 14px;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
`;

export const AuthForm = styled(Form)`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AuthFormField = styled(Field)`
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
`;

export const AuthFormPasswordIcon = styled.span`
  position: absolute;
  bottom: 10px;
  right: 18px;
  color: #ffffff;
  opacity: 0.4;
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
