import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <nav>
      {!isLoggedIn && <Link to="/"></Link>}
      {isLoggedIn && <Link to="/recipes"></Link>}
    </nav>
  );
};
