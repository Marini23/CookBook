import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authSlice/authOperations';

export const LogOutBtn = () => {
  const dispatch = useDispatch();
  return (
    <button type="button" onClick={() => dispatch(logOut())}>
      Log out
    </button>
  );
};
