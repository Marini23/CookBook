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
import { useEffect, useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchBarMobile } from 'components/SearchBar/SearchBarMobile';
import { useLocation } from 'react-router-dom';

export const UserBar = () => {
  const name = useSelector(selectUserFirstName);
  const photo = useSelector(selectUserPhoto);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isShoppingListPage = location.pathname === '/shoppinglist';

  return (
    <>
      <Header>
        <WrapperInfo>
          <Logo src={logo} srcSet={`${logo} 1x, ${logo2x} 2x`} alt="logo" />
          {windowWidth > 743 && <SearchBar />}
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
            {windowWidth > 1439 && <Name>{name}</Name>}
            <BurgerMenu windowWidth={windowWidth} />
          </UserInfo>
        </WrapperInfo>
        {windowWidth < 743 && !isShoppingListPage && <SearchBarMobile />}
      </Header>
    </>
  );
};
