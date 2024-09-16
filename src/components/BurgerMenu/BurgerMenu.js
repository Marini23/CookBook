import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import house from '../../images/house.svg';
import basket from '../../images/basket.svg';
import heart from '../../images/heart.svg';
import dinner from '../../images/dinner.svg';
import logout from '../../images/logout_icon.svg';
import login from '../../images/login_icon.svg';
import register from '../../images/register_icon.svg';
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

export const BurgerMenu = () => {
  const navigate = useNavigate();
  const [supportsDynamicViewportHeight, setSupportsDynamicViewportHeight] =
    useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);
  const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
  const [modalIsResetPassword, setModalIsResetPassword] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [bgImage, setBgImage] = useState(
    `linear-gradient(rgba(22, 22, 22, 0.8), rgba(22, 22, 22, 0.8)), url(${bg_menu_desktop})`
  );

  const isMobileScreen = useMediaQuery({ query: '(max-width: 743px)' });
  const isTabletScreen = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1439px)',
  });

  const isDesktopScreen = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  useEffect(() => {
    const handleButtonSize = () => {
      if (isMobileScreen) {
        setBgImage(
          `linear-gradient(rgba(22, 22, 22, 0.8), rgba(22, 22, 22, 0.8)), url(${bg_menu_mobile})`
        );
      } else if (isTabletScreen) {
        setBgImage(
          `linear-gradient(rgba(22, 22, 22, 0.8), rgba(22, 22, 22, 0.8)), url(${bg_menu_tablet})`
        );
      } else if (isDesktopScreen) {
        setBgImage(
          `linear-gradient(rgba(22, 22, 22, 0.8), rgba(22, 22, 22, 0.8)), url(${bg_menu_desktop})`
        );
      } else {

        setBgImage(
          `linear-gradient(rgba(22, 22, 22, 0.8), rgba(22, 22, 22, 0.8)), url(${bg_menu_desktop})`
        );
      }
    };
    handleButtonSize();
  }, [isMobileScreen, isTabletScreen, isDesktopScreen]);

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

  useEffect(() => {
    if (CSS.supports('height', '100dvh')) {
      setSupportsDynamicViewportHeight(true);
    }
  }, []);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };


  const handleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
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
      display: 'none',
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

    bmMenuWrap: {
      position: 'fixed',
      height: supportsDynamicViewportHeight ? '100dvh' : '100vh',
      width: '100%',
      top: 0,
      right: 0,
      overflow: 'hidden',
      zIndex: 2000,
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
      transition: 'background-image 0.7s ease-in-out',
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
      <div
        className={`burger-icon ${isMenuOpen ? 'burger-open' : ''}`}
        onClick={handleMenu}
      >
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </div>
      <Menu
        styles={styles}
        right
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        customBurgerIcon={false} 
        customCrossIcon={false} 
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
              <Img src={register} alt="register icon" />
              <Button type="button" onClick={handleRegisterMenu}>
                REGISTER
              </Button>
            </ListItem>
            <ListItem>
              <Img src={login} alt="login icon" />
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
              <Img src={logout} alt="logout icon" />
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
