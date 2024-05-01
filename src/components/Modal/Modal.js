import Modal from 'react-modal';
import './Modal.css';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect } from 'react';
Modal.setAppElement('#modal-root');

export const ModalWindow = ({ isOpen, isClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      ariaHideApp={false}
      overlayClassName={'modal-overlay'}
      className={'modal-content'}
    >
      <IoCloseOutline
        style={{
          position: 'absolute',
          top: '0',
          right: '16px',
        }}
        size="24px"
        color="black"
        onClick={isClose}
      />
      {children}
    </Modal>
  );
};
