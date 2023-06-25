import styled from '@emotion/styled';

export const SectionTitle = styled.h2`
  color: #fff;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-bottom: 24px;
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
  height: 120px;
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
