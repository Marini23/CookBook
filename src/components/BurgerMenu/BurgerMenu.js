import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { ReactComponent as CloseIcon } from '../../images/close_icon.svg';
import house from '../../images/house.svg';
import basket from '../../images/basket.svg';
import heart from '../../images/heart.svg';
import dinner from '../../images/dinner.svg';
import exit from '../../images/exit-to-app.svg';
import { Img, Link, ListItem } from './BurgerMenu.styled';

export const BurgerMenu = ({ windowWidth }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [burgerButtonSize, setBurgerButtonSize] = useState({
    width: '40px',
    height: '40px',
  });
  const [closeButtonSize, setCloseButtonSize] = useState({
    width: '40px',
    height: '40px',
  });
  useEffect(() => {
    const handleButtonSize = () => {
      if (windowWidth <= 767) {
        setBurgerButtonSize({
          width: `24px`,
          height: `24px`,
        });
        setCloseButtonSize({
          width: `24px`,
          height: `24px`,
        });
      } else if (windowWidth <= 1439) {
        setBurgerButtonSize({
          width: `36px`,
          height: `36px`,
        });
        setCloseButtonSize({
          width: `36px`,
          height: `36px`,
        });
      } else {
        setBurgerButtonSize({
          width: '40px',
          height: '40px',
        });
        setCloseButtonSize({
          width: `40px`,
          height: `40px`,
        });
      }
    };
    handleButtonSize();
  }, [windowWidth]);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleStateChange = state => {
    setIsMenuOpen(state.isOpen);
  };
  const styles = {
    bmBurgerButton: {
      position: 'absolute',
      cursor: 'pointer',
      top: '44px',
      right: '16px',
      width: burgerButtonSize.width,
      height: burgerButtonSize.height,
    },
    bmBurgerBars: {
      background: '#F4C343',
    },
    // bmBurgerBarsHover: {
    //   background: theme.colors.active,
    // },

    bmCrossButton: {
      height: closeButtonSize.height,
      width: closeButtonSize.width,
      top: '70px',
      right: '54px',
    },

    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      top: 0,
      right: 0,
    },
    bmMenu: {
      background: '#252525',
      // fontSize: '40px',
    },
    bmItemList: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '48px',
    },
    bmitem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
  };
  return (
    <>
      <Menu
        styles={styles}
        right
        isOpen={isMenuOpen}
        onStateChange={handleStateChange}
        onClose={handleCloseMenu}
        customCrossIcon={<CloseIcon />}
        noOverlay
      >
        <h3>MENU</h3>
        {!isLoggedIn && (
          <a onClick={() => handleCloseMenu()} className="menu-item" href="/">
            <img src={house} alt="house icon" />
            HOME
          </a>
        )}
        {!isLoggedIn && <button>REGISTER</button>}
        {!isLoggedIn && <button>LOG IN</button>}
        {isLoggedIn && (
          <list>
            <ListItem>
              <Img src={dinner} alt="plate icon" />
              <Link
                onClick={() => handleCloseMenu()}
                className="menu-item"
                href="/resipes"
              >
                RECIPES
              </Link>
            </ListItem>
            <ListItem>
              <Img src={heart} alt="heart icon" />
              <Link
                onClick={() => handleCloseMenu()}
                className="menu-item"
                href="/favorites"
              >
                FAVORITES
              </Link>
            </ListItem>
            <ListItem>
              <Img src={basket} alt="shopping basket icon" />
              <Link
                onClick={() => handleCloseMenu()}
                className="menu-item"
                href="/shoppinglist"
              >
                SHOPPING LIST
              </Link>
            </ListItem>
            <li>
              <img src={exit} alt="exit icon" />
              <button>LOG OUT</button>
            </li>
          </list>
        )}
      </Menu>
    </>
  );
};
