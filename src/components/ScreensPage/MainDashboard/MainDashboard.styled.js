import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  overflow-x: scroll;
  width: 100%;
  height: 100%;
  margin-bottom: 8px;

  ::-webkit-scrollbar {
    height: 12px;
    width: calc(100% - 24px);
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
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 34px;
`;
