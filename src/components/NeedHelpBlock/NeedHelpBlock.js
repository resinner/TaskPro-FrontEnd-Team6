
// import { useState } from 'react';
// import BasicModal from 'components/Modals/BasicModal/BasicModal';

import needHelpImage from '../../images/2.svg';
import sprite from '../../images/sprite.svg';
import {
  AccentText,
  Image,
  Wrapper,
  Text,
  ButtonWrapper,
  ButtonText,
  CircleIcon,

  // Container,
} from './NeedHelpBlock.styled';
// import AddBoardModal from 'components/Modals/BoardModal/AddBoardModal';

const NeedHelpBlock = () => {
  // const [open, setOpen] = useState(false);

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    // <Container>

      <Wrapper>
        <Image src={needHelpImage} alt="need help image" />

        <Text>
          If you need help with <AccentText>TaskPro</AccentText>, check out our
          support resources or reach out to our customer support team.
        </Text>


        <ButtonWrapper
        //  onClick={handleOpen}
        >

          <CircleIcon>
            <use href={sprite + '#icon-help-circle'} />
          </CircleIcon>

          <ButtonText>Need help?</ButtonText>
        </ButtonWrapper>


        {/* <BasicModal
        open={open}
        closeModal={handleClose}
        children={<AddBoardModal />}
      /> */}
      </Wrapper>
    // </Container>

  );
};

export default NeedHelpBlock;
