import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { ReactComponent as CloseIcon } from '../../images/close_icon.svg';
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
import bg_menu_mobile from '../../images/bg_burgerMenu_mobile.jpg';
import bg_menu_desktop from '../../images/bg_burgerMenu_ desktop.jpg';
import { ModalWindow } from 'components/Modal/Modal';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { ForgotPasswordForm } from 'components/ForgotPasswordForm/ForgotPasswordForm';

export const BurgerMenu = ({ windowWidth }) => {
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
      if (windowWidth <= 767) {
        setBurgerButtonSize({
          width: `24px`,
          height: `24px`,
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
      } else if (windowWidth <= 1439) {
        setBurgerButtonSize({
          width: `36px`,
          height: `36px`,
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

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleStateChange = state => {
    setIsMenuOpen(state.isOpen);
  };

  const openModalRegister = () => {
    setModalIsOpenRegister(true);
  };

  const closeModalRegister = () => {
    setModalIsOpenRegister(false);
  };

  const openModalLogin = () => {
    setModalIsOpenLogin(true);
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
      top: '48px',
      right: '16px',
      width: burgerButtonSize.width,
      height: burgerButtonSize.height,
    },
    bmBurgerBars: {
      background: '#F4C343',
    },
    // bmBurgerBarsHover: {
    //   background: theme.colors.active,
    // },

    bmCrossButton: {
      height: closeButtonSize.height,
      width: closeButtonSize.width,
      top: closeButtonSize.top,
      right: closeButtonSize.right,
    },

    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: 0,
      right: 0,
    },
    bmMenu: {
      backgroundColor: 'rgba(22, 22, 22, 0.8)',
      backgroundImage: bgImage,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    },
    bmItemList: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    bmItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '48px',
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
                href="/resipes"
              >
                RECIPES
              </Link>
            </ListItem>
            <ListItem>
              <Img src={heart} alt="heart icon" />
              <Link
                onClick={() => handleCloseMenu()}
                className="menu-item"
                href="/favorites"
              >
                FAVORITES
              </Link>
            </ListItem>
            <ListItem>
              <Img src={basket} alt="shopping basket icon" />
              <Link
                onClick={() => handleCloseMenu()}
                className="menu-item"
                href="/shoppinglist"
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
