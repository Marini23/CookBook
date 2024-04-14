import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const Layuot = () => {
  return (
    <div>
      <div>UserBar</div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" />
    </div>
  );
};
