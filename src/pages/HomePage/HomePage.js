import { DescriptionInfo } from 'components/DescriptionInfo/DescriptionInfo';
import {
  Container,
  Link,
  Logo,
  MainInfo,
  StyledHamburgerMenu,
  Text,
  WrapContent,
} from './HomePage.styled';
import { Footer } from 'components/Footer/Footer';
import logo from '../../images/logo_mobile.svg';

export const HomePage = () => {
  return (
    <>
      <Container>
        <MainInfo>
          <Logo src={logo} alt="logo" />
          <StyledHamburgerMenu />
          <WrapContent>
            <Text>COOKING WITH US IS EASY AND DELICIOUS!</Text>
            <Link href="/register">Get Started</Link>
          </WrapContent>
        </MainInfo>
        <DescriptionInfo />
      </Container>
      <Footer />
    </>
  );
};
