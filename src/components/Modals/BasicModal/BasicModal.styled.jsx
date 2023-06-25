import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import { RxCross2 } from 'react-icons/rx';
import Modal from '@mui/material/Modal';

export const ModalWindow = styled(Modal)`
  backdrop-filter: blur(2px);
`;

export const ModalField = styled(Box)`
  padding: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 335px;
  width: ${props => (props.value === true ? `300px` : `335px`)};
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  background: #151515;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);

  @media screen and (min-width: 768px) {
    max-width: 350px;
  }

  &.filter {
    width: 300px;
  }

  &.needHelp {
    width: 335px;

    @media screen and (min-width: 768px) {
      width: 400px;
    }
  }

  &.editProfile {
    width: 335px;

    @media screen and (min-width: 768px) {
      width: 400px;
    }
  }
`;

export const CloseModal = styled(RxCross2)`
  position: absolute;
  top: 14px;
  right: 14px;
  color: #fff;
  width: 18px;
  height: 18px;

  cursor: pointer;
`;
