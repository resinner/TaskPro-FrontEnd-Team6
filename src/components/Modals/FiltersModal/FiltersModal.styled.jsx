import styled from '@emotion/styled';

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
  margin-bottom: 14px;
`;
export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-bottom: 24px;

  &:first-of-type {
    padding-top: 14px;
    padding-bottom: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  &:last-of-type {
    position: relative;
    margin-bottom: 0;
  }
`;

export const FormTitle = styled.h3`
  color: #fff;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-bottom: 14px;
`;

export const BgcWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 252px;
  gap: 4px;
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

export const ShowAllLabel = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-family: Poppins;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  cursor: pointer;

  position: absolute;
  top: 2px;
  right: 0;
`;

export const RadioBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Label = styled.label`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 14px;

  cursor: pointer;

  &.active {
    border: ${props =>
      props.value === 'Without' && '2px solid rgba(255, 255, 255, 0.3)'};
    border: ${props =>
      props.value === 'Low' && '2px solid rgba(143, 161, 208, 1)'};
    border: ${props =>
      props.value === 'Medium' && '2px solid rgba(224, 156, 181, 1)'};
    border: ${props =>
      props.value === 'High' && '2px solid rgba(190, 219, 176, 1)'};
  }
`;

export const LabelItem = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${props =>
    props.value === 'Without' && 'rgba(255, 255, 255, 0.30)'};
  background-color: ${props =>
    props.value === 'Low' && 'rgba(143, 161, 208, 1)'};
  background-color: ${props =>
    props.value === 'Medium' && 'rgba(224, 156, 181, 1)'};
  background-color: ${props =>
    props.value === 'High' && 'rgba(190, 219, 176, 1)'};

  transition: all 250ms linear;

  &.active {
    width: 6px;
    height: 6px;
  }
`;

export const LabetlText = styled.p`
  width: 88px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-family: Poppins;
  letter-spacing: -0.24px;
  margin-left: 26px;

  &.active {
    color: white;
  }
`;
