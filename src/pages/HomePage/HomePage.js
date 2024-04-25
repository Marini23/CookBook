import { DescriptionInfo } from 'components/DescriptionInfo/DescriptionInfo';
import { Container, MainInfo } from './HomePage.styled';
import { Footer } from 'components/Footer/Footer';
import logo from '../../images/logo_mobile.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

export const HomePage = () => {
  return (
    <>
      <Container>
        <MainInfo>
          <img src={logo} alt="logo" />
          <GiHamburgerMenu />
          <div>
            <p>COOKING WITH US IS EASY AND DELICIOUS!</p>
            <a href="/register">Get Started</a>
          </div>
        </MainInfo>
        <DescriptionInfo />
      </Container>
      <Footer />
    </>
  );
};
