import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { ReactComponent as CloseIcon } from '../../images/close_icon.svg';
import { ReactComponent as BurgerIcon } from '../../images/burger_normal.svg';
import house from '../../images/house.svg';
import basket from '../../images/basket.svg';
import heart from '../../images/heart.svg';
import dinner from '../../images/dinner.svg';
import exit from '../../images/exit-to-app.svg';
import {
  Button,
  Home,
  Img,
  Link,
  List,
  ListItem,
  Title,
} from './BurgerMenu.styled';
import { LogOutBtn } from 'components/LogOut/LogOut';
import bg_menu_mobile from '../../images/burger_menu_mobile.jpg';
import bg_menu_tablet from '../../images/bg_burger_tablet.jpg';
import bg_menu_desktop from '../../images/bg_burgerMenu_desktop.jpg';
import { ModalWindow } from 'components/Modal/Modal';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { ForgotPasswordForm } from 'components/ForgotPasswordForm/ForgotPasswordForm';
import './BurgerMenu.css';
import { useNavigate } from 'react-router-dom';

export const BurgerMenu = ({ windowWidth }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);
  const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
  const [modalIsResetPassword, setModalIsResetPassword] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [burgerButtonSize, setBurgerButtonSize] = useState({
    width: '40px',
    height: '40px',
  });
  const [closeButtonSize, setCloseButtonSize] = useState({
    width: '40px',
    height: '40px',
    top: '70px',
    right: '54px',
  });
  const [bgImage, setBgImage] = useState(
    `linear-gradient(rgba(22, 22, 22, 0.8), rgba(22, 22, 22, 0.8)), url(${bg_menu_desktop})`
  );
  useEffect(() => {
    const handleButtonSize = () => {
      if (windowWidth <= 743) {
        setBurgerButtonSize({
          width: `24px`,
          height: `24px`,
          top: '40px',
          right: '16px',
        });
        setCloseButtonSize({
          width: `24px`,
          height: `24px`,
          top: '48px',
          right: '16px',
        });
        setBgImage(
          `linear-gradient(rgba(22, 22, 22, 0.8), rgba(22, 22, 22, 0.8)), url(${bg_menu_mobile})`
        );
      } else if (windowWidth > 743 && windowWidth < 1439) {
        setBurgerButtonSize({
          width: `32px`,
          height: `32px`,
          top: '17px',
          right: '40px',
        });
        setCloseButtonSize({
          width: `40px`,
          height: `40px`,
          top: '37px',
          right: '54px',
        });
        setBgImage(
          `linear-gradient(rgba(22, 22, 22, 0.8), rgba(22, 22, 22, 0.8)), url(${bg_menu_tablet})`
        );
      } else if (windowWidth > 1439) {
        setBurgerButtonSize({
          width: `40px`,
          height: `40px`,
          top: '71px',
          right: '72px',
        });
        setCloseButtonSize({
          width: `36px`,
          height: `36px`,
          top: '70px',
          right: '54px',
        });
        setBgImage(
          `linear-gradient(rgba(22, 22, 22, 0.8), rgba(22, 22, 22, 0.8)), url(${bg_menu_desktop})`
        );
      } else {
        setBurgerButtonSize({
          width: '40px',
          height: '40px',
          top: '71px',
          right: '72px',
        });
        setCloseButtonSize({
          width: `40px`,
          height: `40px`,
          top: '70px',
          right: '54px',
        });
        setBgImage(
          `linear-gradient(rgba(22, 22, 22, 0.8), rgba(22, 22, 22, 0.8)), url(${bg_menu_desktop})`
        );
      }
    };
    handleButtonSize();
  }, [windowWidth]);

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
    return () => {
      body.classList.remove('no-scroll'); // Clean up on unmount
    };
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleStateChange = state => {
    setIsMenuOpen(state.isOpen);
  };

  const openModalRegister = () => {
    setModalIsOpenRegister(true);
    navigate('/register');
  };

  const closeModalRegister = () => {
    setModalIsOpenRegister(false);
  };

  const openModalLogin = () => {
    setModalIsOpenLogin(true);
    navigate('/login');
  };

  const closeModalLogin = () => {
    setModalIsOpenLogin(false);
  };

  const openModalResetPassword = () => {
    setModalIsResetPassword(true);
  };

  const closeModalResetPassword = () => {
    setModalIsResetPassword(false);
  };

  const handleRegisterMenu = () => {
    setIsMenuOpen(false);
    openModalRegister();
  };

  const handleLoginMenu = () => {
    setIsMenuOpen(false);
    openModalLogin();
  };

  const styles = {
    bmBurgerButton: {
      position: 'absolute',
      cursor: 'pointer',
      top: burgerButtonSize.top,
      right: burgerButtonSize.right,
      width: burgerButtonSize.width,
      height: burgerButtonSize.height,
    },
    bmBurgerBars: {
      background: '#F4C343',
    },
    bmBurgerBarsHover: {
      background: '#ffffff',
    },
    bmIcon: {
      fill: '#ffffff',
    },
    bmIconHover: {
      fill: '#F4C343',
      background: '#ffffff',
    },
    bmCrossButton: {
      height: closeButtonSize.height,
      width: closeButtonSize.width,
      top: closeButtonSize.top,
      right: closeButtonSize.right,
    },

    bmMenuWrap: {
      position: 'fixed',
      height: '100dvh',
      width: '100%',
      top: 0,
      right: 0,
      overflow: 'hidden',
    },
    bmMenu: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      overflow: 'hidden',
      backgroundColor: 'rgba(22, 22, 22, 0.8)',
      backgroundImage: bgImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    bmItemList: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bmItem: {
      display: 'flex',
      flexDirection: 'column',
    },
  };
  return (
    <>
      <Menu
        styles={styles}
        right
        isOpen={isMenuOpen}
        onStateChange={handleStateChange}
        onClose={handleCloseMenu}
        // customBurgerIcon={<BurgerIcon />}
        customBurgerIcon={<BurgerIcon className="bm-icon" />}
        customCrossIcon={<CloseIcon />}
        noOverlay
      >
        <Title>MENU</Title>
        {!isLoggedIn && (
          <List>
            <ListItem>
              <Img src={house} alt="house icon" />
              <Home onClick={() => handleCloseMenu()} className="menu-item">
                HOME
              </Home>
            </ListItem>
            <ListItem>
              <Button type="button" onClick={handleRegisterMenu}>
                REGISTER
              </Button>
            </ListItem>
            <ListItem>
              <Button type="button" onClick={handleLoginMenu}>
                LOG IN
              </Button>
            </ListItem>
          </List>
        )}
        {isLoggedIn && (
          <List>
            <ListItem>
              <Img src={dinner} alt="plate icon" />
              <Link
                onClick={() => handleCloseMenu()}
                className="menu-item"
                to="/recipes"
              >
                RECIPES
              </Link>
            </ListItem>
            <ListItem>
              <Img src={heart} alt="heart icon" />
              <Link
                onClick={() => handleCloseMenu()}
                className="menu-item"
                to="/favorites"
              >
                FAVORITES
              </Link>
            </ListItem>
            <ListItem>
              <Img src={basket} alt="shopping basket icon" />
              <Link
                onClick={() => handleCloseMenu()}
                className="menu-item"
                to="/shoppinglist"
              >
                SHOPPING LIST
              </Link>
            </ListItem>
            <ListItem>
              <Img src={exit} alt="exit icon" />
              <LogOutBtn />
            </ListItem>
          </List>
        )}
      </Menu>
      <ModalWindow isClose={closeModalRegister} isOpen={modalIsOpenRegister}>
        <RegisterForm
          isClose={closeModalRegister}
          isOpenLogin={openModalLogin}
        />
      </ModalWindow>
      <ModalWindow isClose={closeModalLogin} isOpen={modalIsOpenLogin}>
        <LoginForm
          isClose={closeModalLogin}
          isOpenRegister={openModalRegister}
          isOpenResetPassword={openModalResetPassword}
        />
      </ModalWindow>
      <ModalWindow
        isClose={closeModalResetPassword}
        isOpen={modalIsResetPassword}
      >
        <ForgotPasswordForm isClose={closeModalResetPassword} />
      </ModalWindow>
    </>
  );
};
