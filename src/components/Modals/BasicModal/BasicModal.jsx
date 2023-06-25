import * as React from 'react';
import { useState, useEffect } from 'react';
// import Modal from '@mui/material/Modal';
import { ModalField, CloseModal, ModalWindow } from './BasicModal.styled';

const BasicModal = ({ children, name, open, closeModal }) => {
  const [modalClass, setModalClass] = useState(``);

  const handleBtnClick = name => {
    if (name === 'NeedHelp') {
      setModalClass('needHelp');
    } else if (name === 'Filter') {
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

  return (
    <div>
      <ModalWindow
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalField className={modalClass}>
          <CloseModal onClick={closeModal} type="button" />
          {children}
        </ModalField>
      </ModalWindow>
    </div>
  );
};

export default BasicModal;
