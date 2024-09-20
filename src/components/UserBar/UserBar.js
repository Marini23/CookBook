import { useMediaQuery } from 'react-responsive';
import {
  Header,
  Img,
  Logo,
  Name,
  UserInfo,
  WrapperInfo,
} from './UserBar.styled';
import logo from '../../images/new-logo.svg';
import logo2x from '../../images/logo_2x.png';
import avatar from '../../images/avatar_icon.svg';
import { selectUserFirstName, selectUserPhoto } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchBarMobile } from 'components/SearchBar/SearchBarMobile';
import { Link, useLocation } from 'react-router-dom';

export const UserBar = () => {
  const name = useSelector(selectUserFirstName);
  const photo = useSelector(selectUserPhoto);

  const location = useLocation();

  const isMobileScreen = useMediaQuery({ query: '(max-width: 743px)' });
  const isTabletDesktopScreen = useMediaQuery({
    query: '(min-width: 744px)',
  });

  const isDesktopScreen = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  const isShoppingListPage = location.pathname === '/shoppinglist';

  return (
    <>
      <Header>
        <WrapperInfo>
          <Link to="/recipes">
            <Logo src={logo} srcSet={`${logo} 1x, ${logo2x} 2x`} alt="logo" />
          </Link>
          {isTabletDesktopScreen && <SearchBar />}
          <UserInfo>
            <Img
              src={photo || avatar}
              alt="avatar"
              width={24}
              height={24}
              onError={e => {
                e.target.onerror = null; // Prevents infinite loop if avatar also fails to load
                e.target.src = avatar;
              }}
            />
            {isDesktopScreen && <Name>{name}</Name>}
            <BurgerMenu />
          </UserInfo>
        </WrapperInfo>
        {isMobileScreen && !isShoppingListPage && <SearchBarMobile />}
      </Header>
    </>
  );
};
