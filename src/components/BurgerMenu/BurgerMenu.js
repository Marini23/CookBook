import { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';

export const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };
  const handleStateChange = state => {
    setIsMenuOpen(state.isOpen);
  };
  return (
    <>
      <Menu
        right
        isOpen={isMenuOpen}
        onStateChange={handleStateChange}
        onClose={handleCloseMenu}
      >
        <h3>MENU</h3>
        <a onClick={() => handleCloseMenu()} className="menu-item" href="/">
          HOME
        </a>
        <button>REGISTER</button>
        <button>LOG IN</button>
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
