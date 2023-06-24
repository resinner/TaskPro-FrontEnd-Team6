import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  background: #121212;
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 14px;
  margin: 0 auto 24px;
  width: calc(100% - 28px);

  background: #1f1f1f;
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
  color: #fff;
  margin-bottom: 18px;
`;

export const AccentText = styled.span`
  color: #bedbb0;
`;

export const ButtonWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const CircleIcon = styled.svg`
  stroke: #fff;
  fill: transparent;
  width: 20px;
  height: 20px;
`;

export const ButtonText = styled.p`
  font-family: Poppins;
  font-weight: 500;
  color: #fff;
  font-size: 12px;
  letter-spacing: -0.24px;
`;
