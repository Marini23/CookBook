import { useSelector } from 'react-redux';
// import logo from '../../images/logo_mob_footer.svg';
import logo from '../../images/new-logo.svg';
import logo2x from '../../images/logo_2x.png';
import {
  Container,
  FooterText,
  Img,
  Link,
  TextContainer,
} from './Footer.styled';
import { selectIsLoggedIn } from '../../redux/selectors';
import { FooterForUser } from './FooterForUser';
export const Footer = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? (
    <FooterForUser />
  ) : (
    <Container>
      <Img src={logo} srcSet={`${logo} 1x, ${logo2x} 2x`} alt="logo" />
      <TextContainer>
        <FooterText>
          Copyright © 2024 Created by
          <Link href="https://www.linkedin.com/in/olena-prymak-b63b2a275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            Olena Prymak
          </Link>{' '}
          &{' '}
          <Link href="https://www.linkedin.com/in/maryna-udovychenko">
            Maryna Udovychenko.
          </Link>
        </FooterText>
        <FooterText>All rights reserved.</FooterText>
      </TextContainer>
    </Container>
  );
};
