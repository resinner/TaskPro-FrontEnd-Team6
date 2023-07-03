import { Icon, Text, Wrapper } from './Filter.styled';
import sprite from '../../../images/sprite.svg';
import BasicModal from 'components/Modals/BasicModal/BasicModal';
import { useState } from 'react';
import FiltersModal from 'components/Modals/FiltersModal/FiltersModal';

const Filter = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Wrapper onClick={handleOpen}>
        <Icon>
          <use href={sprite + '#icon-filter'} />
        </Icon>

        <Text>Filters</Text>
      </Wrapper>
      <BasicModal
        name="Filters"
        open={open}
        closeModal={handleClose}
        children={<FiltersModal closeModal={handleClose} />}
      />
    </>
  );
};

export default Filter;
