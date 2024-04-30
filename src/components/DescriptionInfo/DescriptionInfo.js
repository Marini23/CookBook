import img1_mobile from '../../images/img1_home_mobile.jpg';
import img1_tablet from '../../images/img1_home_tablet.jpg';
import img1_desktop from '../../images/img1_home_desktop.jpg';
import img2_mobile from '../../images/img2_home_mobile.jpg';
import img2_tablet from '../../images/img2_home_tablet.jpg';
import img2_desktop from '../../images/img2_home_desktop.jpg';
import img3_mobile from '../../images/img3_home_mobile.jpg';
import img3_tablet from '../../images/img3_home_tablet.jpg';
import img3_desktop from '../../images/img3_home_desktop.jpg';
import {
  InfoBlock,
  InfoContainer,
  Link,
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
export const DescriptionInfo = () => {
  const [modalIsOpenRegister, setModalIsOpenRegister] = useState(false);

  const openModalRegister = () => {
    setModalIsOpenRegister(true);
  };

  const closeModalRegister = () => {
    setModalIsOpenRegister(false);
  };

  return (
    <SectionContainer>
      <Text>
        <SpanText>Cooking with Love</SpanText> - is more than a recipe hub. It's
        your culinary companion, making cooking easy and enjoyable. Discover a
        world of flavors, nutrition, and convenience with - where every dish is
        an adventure.
      </Text>
      <InfoBlock>
        <Picture>
          <source srcSet={img1_mobile} media="(max-width: 767px)" />
          <source srcSet={img1_tablet} media="(min-width: 768px)" />
          <source srcSet={img1_desktop} media="(min-width: 1440px)" />
          <img src={img1_mobile} alt="illustration" />
        </Picture>
        <InfoContainer>
          <TitleBlock>1000+ RECIPES</TitleBlock>
          <TextBlock>
            Here you will find more than 1000 recipes for every taste. Constant
            updating of the recipe database allows you to please even the most
            gourmets. Get access to all recipes after registration.
          </TextBlock>
          <Link type="button" onClick={openModalRegister}>
            Get Started
          </Link>
          {/* <Link href="/register">Get Started</Link> */}
        </InfoContainer>
      </InfoBlock>
      <InfoBlock>
        <InfoContainer>
          <TitleBlock>Make your shopping list</TitleBlock>
          <TextBlock>
            Our service simplifies your grocery shopping by allowing you to
            create a personalized shopping list. Adjust the list yourself:
            adjusting the quantity, availability, etc.
          </TextBlock>
          <Link type="button" onClick={openModalRegister}>
            Get Started
          </Link>
          {/* <Link href="/register">Get Started</Link> */}
        </InfoContainer>
        <Picture>
          <source srcSet={img2_mobile} media="(max-width: 767px)" />
          <source srcSet={img2_tablet} media="(min-width: 768px)" />
          <source srcSet={img2_desktop} media="(min-width: 1440px)" />
          <img src={img2_mobile} alt="illustration" />
        </Picture>
      </InfoBlock>
      <InfoBlock>
        <Picture>
          <source srcSet={img3_mobile} media="(max-width: 767px)" />

          <source srcSet={img3_tablet} media="(min-width: 768px)" />
          <source srcSet={img3_desktop} media="(min-width: 1440px)" />
          <img src={img3_mobile} alt="illustration" />
        </Picture>
        <InfoContainer>
          <TitleBlock>Recipes for every taste</TitleBlock>
          <TextBlock>
            Explore a variety of recipes organized by diet and calorie count.
            Each recipe includes photos, ingredient lists, and step-by-step
            instructions, making cooking a breeze.
          </TextBlock>
          <Link type="button" onClick={openModalRegister}>
            Get Started
          </Link>
          {/* <Link href="/register">Get Started</Link> */}
        </InfoContainer>
      </InfoBlock>
      <ModalWindow isClose={closeModalRegister} isOpen={modalIsOpenRegister}>
        <RegisterForm isClose={closeModalRegister} />
      </ModalWindow>
    </SectionContainer>
  );
};
