import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: 8px;
`;
export const HeaderColumn = styled.div`
  border-radius: 8px;
  width: 100%;
  height: 56px;
  padding: 14px 24px;
  background-color: #121212;
  color: #ffffff;
  font-weight: 500;
  // margin-bottom: 14px;
`;
export const Wrap = styled.div`
  margin-bottom: 36px;
`;
export const Column = styled.div`
  width: 334px;
  display: flex;
  flex-direction: column;
  gap: 14px;
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

export const PensilIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.modal.plusColor};
`;

export const TrashIcon = styled.svg`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 5px;
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.modal.plusColor};
`;

export const TitleName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
