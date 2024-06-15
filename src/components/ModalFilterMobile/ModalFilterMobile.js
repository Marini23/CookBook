import Modal from 'react-modal';
import './ModalFilterMobile.css';
import closeIcon from '../../images/close_filter_mobile.svg';
import { useEffect } from 'react';
Modal.setAppElement('#modal-root');

export const ModalFilterMobile = ({ isOpen, isClose, children }) => {
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
      <div className="close-container">
        <p className="text">FILTER</p>
        <img
          src={closeIcon}
          alt="Close"
          className="closeIconMobile"
          onClick={isClose}
        />
      </div>
      {children}
    </Modal>
  );
};
