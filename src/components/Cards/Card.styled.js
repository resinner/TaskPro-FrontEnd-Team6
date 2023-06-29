import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  padding-right: 14px;

  width: 100%;
  height: 154px;
  border-radius: 8px;
  background-color: #121212;
  justify-content: space-between;
`;

export const CardTopBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h4`
  color: #ffffff;
  font-weight: 600;
  text-align: left;
  font-size: 14px;
`;

export const CardDescription = styled.p`
  display: flex;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 8px;
  text-align: left;
  font-size: 12px;
  color: #ffffff80;
`;

export const CardDivider = styled.span`
  width: 100%;
  margin-top: 14px;
  margin-bottom: 14px;
  border: 1px solid #ffffff1a;
  color: #ffffff1a;
`;

export const CardBottomBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardInfoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 14px;
`;

export const CardPriorityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 4px;
`;
export const Priority = styled.div`
  font-size: 8px;
  color: #ffffff80;
`;

export const PriorityValueWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const PriorityIndicator = styled.span`
  height: 12px;
  width: 12px;
  border-radius: 100%;
`;

export const PriorityValue = styled.div`
  font-size: 10px;
  color: #ffffff;
`;

export const CardDeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 4px;
`;

export const Deadline = styled.div`
  font-size: 8px;
  color: #ffffff80;
`;

export const DeadlineValue = styled.div`
  font-size: 10px;
  color: #ffffff;
`;

export const IconsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 8px;
`;
export const IconMove = styled.svg`
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.sidebar.projectIcon};

  transition: all 150ms linear;

  :hover {
    stroke: ${props => props.theme.sidebar.projectIconHover};
    cursor: pointer;
  }
`;
export const IconEdit = styled.svg`
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.sidebar.projectIcon};

  transition: all 150ms linear;

  :hover {
    stroke: ${props => props.theme.sidebar.projectIconHover};
    cursor: pointer;
  }
`;
export const IconTrash = styled.svg`
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.sidebar.projectIcon};

  transition: all 150ms linear;

  :hover {
    stroke: ${props => props.theme.sidebar.projectIconHover};
    cursor: pointer;
  }
`;
export const IconBell = styled.svg`
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.sidebar.projectIcon};

  transition: all 150ms linear;
`;

// popup items

export const PopupWrapper = styled.div`
position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background-color: ffffff;
  cursor: pointer;
`

export const OptionPopup = styled.p`
 font-family: Poppins;
 font-size: 14px;
 font-weight: 500;
`;
export const PopupOpenBlock = styled.ul`
 font-family: Poppins;
 font-size: 14px;
 font-weight: 500;
 `;

export const PopupOpenBlockItem = styled.li`
 font-family: Poppins;
 font-size: 14px;
 font-weight: 500;
`;