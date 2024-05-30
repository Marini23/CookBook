import Modal from 'react-modal';
import './Modal.css';
import closeIcon from '../../images/icon_close.svg';
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
      <img
        src={closeIcon}
        alt="Close"
        className="closeIcon"
        onClick={isClose}
      />
      {children}
    </Modal>
  );
};
