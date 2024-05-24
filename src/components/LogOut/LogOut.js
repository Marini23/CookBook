import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/authSlice/authOperations';
import { Button } from './LogOut.styled';

export const LogOutBtn = () => {
  const dispatch = useDispatch();
  return (
    <Button type="button" onClick={() => dispatch(logOut())}>
      LOG OUT
    </Button>
  );
};
