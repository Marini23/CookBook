import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { UserBar } from 'components/UserBar/UserBar';
import { Footer } from 'components/Footer/Footer';

export const Layuot = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      {isLoggedIn && <UserBar />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};
