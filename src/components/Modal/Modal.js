import Modal from 'react-modal';
import './Modal.css';
import closeIcon from '../../images/icon_close.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
Modal.setAppElement('#modal-root');

export const ModalWindow = ({ isOpen, isClose, children }) => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
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

  const handleClose = () => {
    isClose();
    if (isLoggedIn) {
      navigate('/recipes');
    } else {
      navigate(-1);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      ariaHideApp={false}
      overlayClassName={'modal-overlay-default'}
      className={'modal-content-default'}
    >
      <img
        src={closeIcon}
        alt="Close"
        className="closeIcon"
        onClick={handleClose}
      />
      {children}
    </Modal>
  );
};
