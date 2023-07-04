import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  height: calc(100vh - 60px);
  margin-left: ${props => (props.isOpen ? '225px' : '0')};
  transition: all 250ms linear;
  padding: 20px;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 68px);
    margin-left: ${props => (props.isOpen ? '260px' : '0')};
  }

  @media screen and (min-width: 1280px) {
    margin-left: 260px;
  }
`;

export const Text = styled.p`
  width: 335px;
  color: ${props => props.theme.column.textSecondary};
  text-align: center;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;

  @media screen and (min-width: 768px) {
    width: 486px;
  }
`;

export const AccentText = styled.span`
  color: ${props => props.theme.modal.textAccent};
  cursor: pointer;
`;
