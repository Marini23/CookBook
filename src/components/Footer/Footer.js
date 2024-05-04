import { LogOutBtn } from 'components/LogOut/LogOut';
import logo from '../../images/logo_mob_footer.svg';
import { Container, FooterText, Img, Link } from './Footer.styled';
export const Footer = () => {
  return (
    <Container>
      <Img src={logo} alt="logo" />
      <FooterText>
        Copyright © 2024 Created by
        <Link href="https://www.linkedin.com/in/olena-prymak-b63b2a275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          Olena Prymak
        </Link>{' '}
        &{' '}
        <Link href="https://www.linkedin.com/in/maryna-udovychenko">
          Maryna Udovychenko
        </Link>
        .
      </FooterText>
      <LogOutBtn />
    </Container>
  );
};
