import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 34px;
  overflow-x: scroll;
  width: 100%;
  height: 100%;
  margin-bottom: 8px;

  ::-webkit-scrollbar {
    height: 12px;
    width: calc(100% - 24px);
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

export const ContentWrapper = styled.div`
  position: relative;
`;
