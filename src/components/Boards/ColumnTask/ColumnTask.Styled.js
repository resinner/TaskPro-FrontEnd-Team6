import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const TaskList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 8px;
  max-height: calc(154px * 2 + 8px);
  padding-right: 8px;

  overflow-y: scroll;

  overflow-y: ${props => (props.length < 3 ? 'hidden' : 'scroll')};
  width: ${props => (props.length < 3 ? '342px' : '350px')};

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.column.scrollTrack};
    border: 1px solid ${props => props.theme.column.scrollBorder};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${props => props.theme.column.scrollThumb};
  }

  @media screen and (min-height: 780px) {
    max-height: calc(154px * 3 + 16px);
    overflow-y: ${props => (props.length < 4 ? 'hidden' : 'scroll')};
    width: ${props => (props.length < 4 ? '342px' : '350px')};
  }

  @media screen and (min-height: 942px) {
    max-height: calc(154px * 4 + 24px);
    overflow-y: ${props => (props.length < 5 ? 'hidden' : 'scroll')};
    width: ${props => (props.length < 5 ? '342px' : '350px')};
  }

  @media screen and (min-height: 1104px) {
    max-height: calc(154px * 5 + 32px);
    overflow-y: ${props => (props.length < 6 ? 'hidden' : 'scroll')};
    width: ${props => (props.length < 6 ? '342px' : '350px')};
  }
`;

// header
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 334px;
  height: 56px;
  padding: 14px 24px;

  border-radius: 8px;
  background-color: ${props => props.theme.column.backgroundMain};
  font-weight: 500;
`;

export const Title = styled.h2`
  color: ${props => props.theme.column.textMain};
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
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
  stroke: ${props => props.theme.column.icon};
  fill: transparent;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    opacity: 0.4;
    transform: scale(1.4);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 334px;
  padding: 14px;
  margin-bottom: 16px;

  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;

  border: none;
  color: ${props => props.theme.column.buttonColor};
  background-color: ${props => props.theme.column.buttonBackground};
  border-radius: 8px;

  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.column.plusBackground};
  margin-right: 8px;
  padding: 7px;

  transition: all 250ms linear;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const PlusIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.column.plusColor};
`;
