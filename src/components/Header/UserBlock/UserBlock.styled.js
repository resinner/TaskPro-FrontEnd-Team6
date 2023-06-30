import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.span`
  color: ${props => props.theme.header.userName};
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  cursor: pointer;
  object-fit: cover;
`;
