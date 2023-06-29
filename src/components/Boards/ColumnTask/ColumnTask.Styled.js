import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const TaskList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 8px;
  height: 400px;
  padding-right: 8px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #121212;
  }
`;

// header
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  width: 334px;

  height: 56px;

  padding: 14px 24px;

  background-color: #121212;
  color: #ffffff;
  font-weight: 500;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.modal.plusColor};
  cursor: pointer;

  transition: all 250ms linear;

  &:hover {
    opacity: 0.4;
  }
`;

export const AuthFormSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 334px;

  padding: 14px;
  border: none;
  background: #bedbb0;
  border-radius: 8px;
  margin-bottom: 16px;
  color: #161616;
  font-size: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  transition: all 250ms linear;

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

  cursor: pointer;
`;

export const PlusIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.modal.plusColor};
`;
