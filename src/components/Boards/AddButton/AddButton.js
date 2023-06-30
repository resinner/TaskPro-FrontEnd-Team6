import { Button, Icon, IconWrapper, Text } from './AddButton.styled';
import sprite from '../../../images/sprite.svg';

const AddButton = ({ openModal, length }) => {
  return (
    <Button length={length} onClick={openModal} type="button">
      <IconWrapper>
        <Icon>
          <use href={sprite + '#icon-plus'} />
        </Icon>
      </IconWrapper>

      <Text>Add another column</Text>
    </Button>
  );
};

export default AddButton;
