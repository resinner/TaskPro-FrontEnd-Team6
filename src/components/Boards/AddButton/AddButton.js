import { Button, Icon, IconWrapper, Text } from './AddButton.styled';
import sprite from '../../../images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectColumnsLength } from 'redux/dashboards/dashboardsSelectors';

const AddButton = ({ openModal }) => {
  const columnsLength = useSelector(selectColumnsLength);

  return (
    <Button length={columnsLength} onClick={openModal} type="button">
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
