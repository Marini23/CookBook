import { useMediaQuery } from 'react-responsive';
import img1_mobile from '../../images/img1_home_mobile.jpg';
import img1_mobile_2x from '../../images/img1_mobile_2x.jpg';
import img1_mobile_3x from '../../images/img1_mobile_3x.jpg';
import img1_tablet from '../../images/img1_tablet.jpg';
import img1_tablet_2x from '../../images/img1_tablet_2x.jpg';
import img1_tablet_3x from '../../images/img1_tablet_3x.jpg';
import img1_desktop from '../../images/img1_desktop.jpg';
import img1_desktop_2x from '../../images/img1_desktop_2x.jpg';
import img1_desktop_3x from '../../images/img1_desktop_3x.jpg';
import img2_mobile from '../../images/img2_home_mobile.jpg';
import img2_mobile_2x from '../../images/img2_mobile_2x.jpg';
import img2_mobile_3x from '../../images/img2_mobile_3x.jpg';
import img2_tablet from '../../images/img2_tablet.jpg';
import img2_tablet_2x from '../../images/img2_tabet_2x.jpg';
import img2_tablet_3x from '../../images/img2_tablet_3x.jpg';
import img2_desktop from '../../images/img2_desktop.jpg';
import img2_desktop_2x from '../../images/img2_desktop_2x.jpg';
import img2_desktop_3x from '../../images/img2_desktop_3x.jpg';
import img3_mobile from '../../images/img3_home_mobile.jpg';
import img3_mobile_2x from '../../images/img3_mobile_2x.jpg';
import img3_mobile_3x from '../../images/img3_mobile_3x.jpg';
import img3_tablet from '../../images/img3_tablet.jpg';
import img3_tablet_2x from '../../images/img3_tablet_2x.jpg';
import img3_tablet_3x from '../../images/img3_tablet_3x.jpg';
import img3_desktop from '../../images/img3_desktop.jpg';
import img3_desktop_2x from '../../images/img3_desktop_2x.jpg';
import img3_desktop_3x from '../../images/img3_desktop_3x.jpg';
import {
  InfoBlock,
  InfoContainer,
  Link,
  MobileLink,
  Picture,
  SectionContainer,
  SpanText,
  Text,
  TextBlock,
  TitleBlock,
} from './DescriptionInfo.styled';
import { useState } from 'react';
import { ModalWindow } from 'components/Modal/Modal';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { ForgotPasswordForm } from 'components/ForgotPasswordForm/ForgotPasswordForm';
import { LoginForm } from 'components/LoginForm/LoginForm';
export const DescriptionInfo = () => {
  const navigate = useNavigate();
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);
  const [modalIsOpenLogin, setModalIsOpenLogin] = useState(false);
  const [modalIsResetPassword, setModalIsResetPassword] = useState(false);

  const isMobileScreen = useMediaQuery({ query: '(max-width: 743px)' });
  const isTabletOrDesktopScreen = useMediaQuery({
    query: '(min-width: 744px)',
  });

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

  return (
    <SectionContainer>
      <Text>
        <SpanText>COOKING WITH LOVE</SpanText> - is more than a recipe hub. It's
        your culinary companion, making cooking easy and enjoyable. Discover a
        world of flavors, nutrition, and convenience with - where every dish is
        an adventure.
      </Text>
      <InfoBlock>
        <Picture>
          <source
            srcSet={`${img1_mobile}, ${img1_mobile_2x} 2x, ${img1_mobile_3x} 3x`}
            media="(max-width: 743px)"
          />
          <source
            srcSet={`${img1_tablet}, ${img1_tablet_2x} 2x, ${img1_tablet_3x} 3x`}
            media="(min-width: 744px) and (max-width: 1439px)"
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${img1_desktop}, ${img1_desktop_2x} 2x, ${img1_desktop_3x} 3x`}
          />
          <img src={img1_desktop} alt="illustration" />
        </Picture>
        <InfoContainer>
          <TitleBlock>1000+ RECIPES</TitleBlock>
          <TextBlock>
            Here you will find more than 1000 recipes for every taste. Constant
            updating of the recipe database allows you to please even the most
            gourmets. Get access to all recipes after registration.
          </TextBlock>
          {isTabletOrDesktopScreen && (
            <Link type="button" onClick={openModalRegister}>
              Get Started
            </Link>
          )}
        </InfoContainer>
      </InfoBlock>
      <InfoBlock>
        <InfoContainer>
          <TitleBlock>MAKE YOUR SHOPPING LIST</TitleBlock>
          <TextBlock>
            Our service simplifies your grocery shopping by allowing you to
            create a personalized shopping list. Adjust the list yourself:
            adjusting the quantity, availability, etc.
          </TextBlock>
          {isTabletOrDesktopScreen && (
            <Link type="button" onClick={openModalRegister}>
              Get Started
            </Link>
          )}
        </InfoContainer>
        <Picture>
          <source
            srcSet={`${img2_mobile}, ${img2_mobile_2x} 2x, ${img2_mobile_3x} 3x`}
            media="(max-width: 743px)"
          />
          <source
            srcSet={`${img2_tablet}, ${img2_tablet_2x} 2x, ${img2_tablet_3x} 3x`}
            media="(min-width: 744px) and (max-width: 1439px)"
          />
          <source
            srcSet={`${img2_desktop}, ${img2_desktop_2x} 2x, ${img2_desktop_3x} 3x`}
            media="(min-width: 1440px)"
          />
          <img src={img2_mobile} alt="illustration" />
        </Picture>
      </InfoBlock>
      <InfoBlock>
        <Picture>
          <source
            srcSet={`${img3_mobile}, ${img3_mobile_2x} 2x, ${img3_mobile_3x} 3x`}
            media="(max-width: 743px)"
          />
          <source
            srcSet={`${img3_tablet}, ${img3_tablet_2x} 2x, ${img3_tablet_3x} 3x`}
            media="(min-width: 744px) and (max-width: 1439px)"
          />
          <source
            srcSet={`${img3_desktop}, ${img3_desktop_2x} 2x, ${img3_desktop_3x} 3x`}
            media="(min-width: 1440px)"
          />
          <img src={img3_mobile} alt="illustration" />
        </Picture>
        <InfoContainer>
          <TitleBlock>RECIPES FOR EVERY TASTE</TitleBlock>
          <TextBlock>
            Explore a variety of recipes organized by diet and calorie count.
            Each recipe includes photos, ingredient lists, and step-by-step
            instructions, making cooking a breeze.
          </TextBlock>
          {isTabletOrDesktopScreen && (
            <Link type="button" onClick={openModalRegister}>
              Get Started
            </Link>
          )}
        </InfoContainer>
      </InfoBlock>
      {isMobileScreen && (
        <MobileLink type="button" onClick={openModalRegister}>
          Get Started
        </MobileLink>
      )}
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
    </SectionContainer>
  );
};
