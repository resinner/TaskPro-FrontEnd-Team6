import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 14px;
  margin: 0 auto 24px;
  width: calc(100% - 28px);

  background: ${props => props.theme.needHelp.background};
  border-radius: 8px;

  @media screen and (min-width: 375px) {
    width: 197px;
  }

  @media screen and (min-width: 768px) {
    width: 212px;
    padding: 20px;
  }
`;

export const Image = styled.img`
  width: 54px;
  height: 78px;
  margin-bottom: 14px;
`;

export const Text = styled.p`
  font-family: Poppins;
  font-size: 14px;
  line-height: 1.42;
  letter-spacing: -0.28px;
  color: ${props => props.theme.needHelp.textMain};
  margin-bottom: 18px;
`;

export const AccentText = styled.span`
  color: ${props => props.theme.needHelp.textAccent};
`;

export const ButtonWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const CircleIcon = styled.svg`
  stroke: ${props => props.theme.needHelp.icon};
  fill: transparent;
  width: 20px;
  height: 20px;
`;

export const ButtonText = styled.p`
  font-family: Poppins;
  font-weight: 500;
  color: ${props => props.theme.needHelp.textMain};
  font-size: 12px;
  letter-spacing: -0.24px;
`;
