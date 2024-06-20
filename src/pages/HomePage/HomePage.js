import { DescriptionInfo } from 'components/DescriptionInfo/DescriptionInfo';
import {
  ButtonContainer,
  Container,
  Link,
  LoginButton,
  Logo,
  MainInfo,
  NavMenu,
  RegisterButton,
  SecondaryText,
  Text,
  WrapContent,
} from './HomePage.styled';
import { Footer } from 'components/Footer/Footer';
import logo from '../../images/new-logo.svg';
import logo2x from '../../images/logo_2x.png';
import { useEffect, useState } from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { ForgotPasswordForm } from 'components/ForgotPasswordForm/ForgotPasswordForm';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

export const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);
  const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
  const [modalIsResetPassword, setModalIsResetPassword] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  return (
    <>
      <Container>
        <MainInfo>
          <Logo src={logo} srcSet={`${logo} 1x, ${logo2x} 2x`} alt="logo" />
          {windowWidth < 768 && <BurgerMenu windowWidth={windowWidth} />}
          {windowWidth >= 768 && (
            <NavMenu>
              <ButtonContainer>
                <LoginButton type="button" onClick={openModalLogin}>
                  Log in
                </LoginButton>
                <RegisterButton type="button" onClick={openModalRegister}>
                  Register
                </RegisterButton>
              </ButtonContainer>
            </NavMenu>
          )}
          <WrapContent>
            <Text>COOKING WITH US IS EASY AND DELICIOUS!</Text>
            {windowWidth >= 768 && (
              <SecondaryText>
                Choose recipes to your taste - get a convenient shopping list,
                detailed cooking instructions and a good mood!
              </SecondaryText>
            )}
            <Link type="button" onClick={openModalRegister}>
              Get Started
            </Link>
          </WrapContent>
        </MainInfo>
        <DescriptionInfo />
      </Container>
      <Footer windowWidth={windowWidth} />
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
