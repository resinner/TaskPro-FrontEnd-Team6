import * as React from 'react';
import { useState, useEffect } from 'react';
import { ModalField, CloseModal, ModalWindow } from './BasicModal.styled';

import sprite from '../../../images/sprite.svg';

const BasicModal = ({ children, name, open, closeModal }) => {
  const [modalClass, setModalClass] = useState(``);

  const handleBtnClick = name => {
    if (name === 'NeedHelp') {
      setModalClass('needHelp');
    } else if (name === 'Filters') {
      setModalClass('filter');
    } else if (name === 'EditProfile') {
      setModalClass('editProfile');
    } else {
      setModalClass('');
    }
  };

  useEffect(() => {
    handleBtnClick(name);
  }, [name]);

  const handleModalClick = e => {
    e.stopPropagation();
  };

  return (
    <div style={{ position: 'absolute' }} onMouseDown={handleModalClick}>
      <ModalWindow
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalField className={modalClass}>
          <CloseModal onClick={closeModal} type="button">
            <use href={sprite + '#icon-x-close'} width={18} height={18} />
          </CloseModal>
          {children}
        </ModalField>
      </ModalWindow>
    </div>
  );
};

export default BasicModal;
