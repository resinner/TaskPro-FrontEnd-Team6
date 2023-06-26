import styled from 'styled-components';
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
`;

export const FormTitle = styled.h3`
  color: #fff;
  font-size: 14px;
  /* font-family: Poppins; */
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-bottom: 14px;
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

export const RadioBtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  padding-right: 25px;
  gap: 4px;
`;

export const IconWrapper = styled.label``;

export const Icon = styled.svg`
  cursor: pointer;
  stroke: rgba(255, 255, 255, 0.5);
  fill: transparent;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
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

export const CustomRadioBtn = styled.div`
  border-radius: 8px;
  width: 28px;
  height: 28px;

  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;

  cursor: pointer;
  background-color: #fff;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;

export const BgcItem = styled.div`
  border-radius: 8px;
  border: none;
  outline: none;
  width: 28px;
  height: 28px;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: contain;

  cursor: pointer;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
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

export const PlusIcon = styled(BsFillPlusSquareFill)`
  width: 28px;
  height: 28px;
  margin-right: 8px;
`;
