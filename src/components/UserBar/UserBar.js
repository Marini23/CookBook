import {
  Header,
  Img,
  Logo,
  Name,
  UserInfo,
  WrapperInfo,
} from './UserBar.styled';
import logo from '../../images/logo_recipes.svg';
import avatar from '../../images/avatar_icon.svg';
import { selectUserFirstName } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { SearchBarMobile } from 'components/SearchBar/SearchBarMobile';

export const UserBar = () => {
  const name = useSelector(selectUserFirstName);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header>
        <WrapperInfo>
          <Logo src={logo} alt="logo" />
          {windowWidth > 1439 && <SearchBar />}
          <UserInfo>
            <Img src={avatar} alt="avatar" width={24} height={24} />
            {windowWidth > 1439 && <Name>{name}</Name>}
            <BurgerMenu windowWidth={windowWidth} />
          </UserInfo>
        </WrapperInfo>
        {windowWidth < 743 && <SearchBarMobile />}
      </Header>
    </>
  );
};
