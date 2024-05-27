import { AvatarIcon, Header, Logo, Name, UserInfo } from './UserBar.styled';
import logo from '../../images/logo_mobile.svg';
import avatar from '../../images/avatar_user_default.svg';
import { selectUserName } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { useEffect, useState } from 'react';

export const UserBar = () => {
  const name = useSelector(selectUserName);
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
      <UserInfo>
        <AvatarIcon>
          <img src={avatar} alt="avatar" width={20} height={20} />
        </AvatarIcon>
        <Name>{name}</Name>
      </UserInfo>
      <BurgerMenu windowWidth={windowWidth} />
    </Header>
  );
};
