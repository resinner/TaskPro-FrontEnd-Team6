import styled from 'styled-components';

export const ListItem = styled.li`
  border-left: 4px solid teal;
  border-radius: 8px;
  /* min-width: 334px; */
  height: 154px;
  padding: 14px 24px;
  background-color: #121212;
  color: #ffffff;
  list-style: none;
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  letter-spacing: -0.28px;
  color: #ffffff;
`;
export const SubTitle = styled.p`
  color: #ffffff80;
  font-size: 8px;
`;
export const SubText = styled.p`
  color: #ffffff;
  font-size: 10px;
`;
export const TextHidden = styled.p`
  font-size: 12px;
  letter-spacing: -0.24px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.14;
  color: #ffffff80;
`;
export const Span = styled.span`
  display: block;
  height: 1px;
  width: 100%;
  background-color: #ffffff80;
  margin: 21px 0 14px 0;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
`;

export const ArrowIcon = styled.svg`
  margin-left: 30px;
  width: 16px;
  height: 16px;
  stroke: ${props => props.theme.modal.plusColor};
`;

export const PensilIcon = styled.svg`
  margin-left: 5px;

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
