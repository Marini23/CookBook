import { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';

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
      top: '15px',
      right: '15px',
    },
    bmCross: {
      background: '#FDFDFD',
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
      // padding: '2.5em 1.5em 0',
      // fontSize: '1.15em',
    },
    // bmItemList: {
    //   display: 'flex',
    //   flexDirection: 'column',
    // },
    // bmitem: {
    //   display: 'flex',
    //   gap: '20px',
    // },
  };
  return (
    <>
      <Menu
        styles={styles}
        right
        isOpen={isMenuOpen}
        onStateChange={handleStateChange}
        onClose={handleCloseMenu}
        noOverlay
      >
        <h3>MENU</h3>
        {!isLoggedIn && (
          <a onClick={() => handleCloseMenu()} className="menu-item" href="/">
            HOME
          </a>
        )}
        {!isLoggedIn && <button>REGISTER</button>}
        {!isLoggedIn && <button>LOG IN</button>}
        {isLoggedIn && (
          <a
            onClick={() => handleCloseMenu()}
            className="menu-item"
            href="/resipes"
          >
            RECIPES
          </a>
        )}
        {isLoggedIn && (
          <a
            onClick={() => handleCloseMenu()}
            className="menu-item"
            href="/favorites"
          >
            FAVORITES
          </a>
        )}
        {isLoggedIn && (
          <a
            onClick={() => handleCloseMenu()}
            className="menu-item"
            href="/shoppinglist"
          >
            SHOPPING LIST
          </a>
        )}
        {isLoggedIn && <button>LOG OUT</button>}
      </Menu>
    </>
  );
};
