import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Circles
      height="80"
      width="80"
      color="#F4C343"
      ariaLabel="circles-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50px',
        left: '50px',
        zIndex: 9999,
      }}
      wrapperClass=""
      visible={true}
    />
  );
};
