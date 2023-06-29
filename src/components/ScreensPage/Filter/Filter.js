import { Icon, Text, Wrapper } from './Filter.styled';
import sprite from '../../../images/sprite.svg';

const Filter = () => {
  return (
    <Wrapper>
      <Icon>
        <use href={sprite + '#icon-filter'} />
      </Icon>

      <Text>Filters</Text>
    </Wrapper>
  );
};

export default Filter;
