import { useDispatch } from 'react-redux';
// import logo from '../../images/logo_mob_footer.svg';
import logo from '../../images/logo_footer.svg';
import logo2x from '../../images/logo_footer_2x.png';
import {
  Button,
  Container,
  FooterText,
  Img,
  LinkCustom,
  LinkItem,
  List,
  TextContainer,
} from './FooterForUser.styled';
import { logOut } from '../../redux/authSlice/authOperations';
import { Link } from 'react-router-dom';

export const FooterForUser = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Link to="/recipes">
        <Img src={logo} srcSet={`${logo} 1x, ${logo2x} 2x`} alt="logo" />
      </Link>
      <List>
        <li>
          <LinkItem href="/CookBook/recipes">RECIPES</LinkItem>
        </li>
        <li>
          <LinkItem href="/CookBook/favorites">FAVORITES</LinkItem>
        </li>
        <li>
          <LinkItem href="/CookBook/shoppinglist">SHOPPING LIST</LinkItem>
        </li>
        <li>
          <Button type="sutton" onClick={() => dispatch(logOut())}>
            LOG OUT
          </Button>
        </li>
      </List>
      <TextContainer>
        <FooterText>
          Copyright © 2024 Created by
          <LinkCustom href="https://www.linkedin.com/in/olena-prymak-b63b2a275?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
            Olena Prymak
          </LinkCustom>{' '}
          &{' '}
          <LinkCustom href="https://www.linkedin.com/in/maryna-udovychenko">
            Maryna Udovychenko.
          </LinkCustom>
        </FooterText>
        <FooterText>All rights reserved.</FooterText>
      </TextContainer>
    </Container>
  );
};
