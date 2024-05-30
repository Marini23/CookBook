import { AvatarIcon, Header, Logo, Name, UserInfo } from './UserBar.styled';
import logo from '../../images/logo_header.svg';
import avatar from '../../images/avatar_user_default.svg';
import { selectUserFirstName } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';

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
    <Header>
      <Logo src={logo} alt="logo" />
      {windowWidth > 1439 && <SearchBar />}
      <UserInfo>
        <AvatarIcon>
          <img src={avatar} alt="avatar" width={20} height={20} />
        </AvatarIcon>
        <Name>{name}</Name>
        <BurgerMenu windowWidth={windowWidth} />
      </UserInfo>
    </Header>
  );
};
