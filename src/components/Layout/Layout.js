import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { UserBar } from 'components/UserBar/UserBar';
import { Footer } from 'components/Footer/Footer';

export const Layuot = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRecipesPage =
    location.pathname === '/recipes' ||
    location.pathname.startsWith('/recipes/');
  const shouldShowUserBar = isLoggedIn || isRecipesPage;

  return (
    <div>
      {shouldShowUserBar && <UserBar />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};
