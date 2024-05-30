import { HomePage } from 'pages/HomePage/HomePage';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layuot } from './Layout/Layout';
import { useEffect, useState } from 'react';
import { fetchCurrentUser } from '../redux/authSlice/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const [isUserStatusChecked, setIsUserStatusChecked] = useState(false);

  useEffect(() => {
    dispatch(fetchCurrentUser()).then(() => setIsUserStatusChecked(true));
  }, [dispatch]);

  useEffect(() => {
    if (isUserStatusChecked && !isRefreshing) {
      if (isLoggedIn) {
        navigate('/recipes');
      } else {
        navigate('/');
      }
    }
  }, [isLoggedIn, isRefreshing, navigate, isUserStatusChecked]);

  if (isRefreshing || !isUserStatusChecked) {
    return <b>Refreshing user...</b>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<HomePage />} />
          <Route path="/recipes" element={<div>Recipes List</div>} />
          <Route path="/favorites" element={<div>Favorites</div>} />
          <Route path="/shoppinglist" element={<div>Shopping List</div>} />
          <Route path="*" element={<div>Homepage</div>} />
        </Route>
      </Routes>
    </div>
  );
};
