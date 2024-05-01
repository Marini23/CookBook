import { DescriptionInfo } from 'components/DescriptionInfo/DescriptionInfo';
import {
  Button,
  Container,
  Link,
  Logo,
  MainInfo,
  NavMenu,
  SecondaryText,
  StyledHamburgerMenu,
  Text,
  WrapContent,
} from './HomePage.styled';
import { Footer } from 'components/Footer/Footer';
import logo from '../../images/logo_mobile.svg';
import { useEffect, useState } from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export const HomePage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);
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
  return (
    <>
      <Container>
        <MainInfo>
          <Logo src={logo} alt="logo" />
          {windowWidth < 768 && <StyledHamburgerMenu />}
          {windowWidth >= 768 && (
            <NavMenu>
              <Button type="button">Log in</Button>
              <Button type="button">Register</Button>
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
      <Footer />
      <ModalWindow isClose={closeModalRegister} isOpen={modalIsOpenRegister}>
        <RegisterForm isClose={closeModalRegister} />
      </ModalWindow>
    </>
  );
};
