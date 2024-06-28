import { HomePage } from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout/Layout';
import { useEffect, useState } from 'react';
import { fetchCurrentUser } from '../redux/authSlice/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/selectors';
import { RecipesPage } from 'pages/RecipesPage/ResipesPage';
import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';

export const App = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const [isUserStatusChecked, setIsUserStatusChecked] = useState(false);

  useEffect(() => {
    dispatch(fetchCurrentUser()).then(() => setIsUserStatusChecked(true));
  }, [dispatch]);

  // useEffect(() => {
  //   if (isUserStatusChecked && !isRefreshing) {
  //     if (isLoggedIn) {
  //       navigate('/recipes');
  //     } else {
  //       navigate('/');
  //     }
  //   }
  // }, [isUserStatusChecked, isRefreshing, isLoggedIn, navigate]);

  if (isRefreshing || !isUserStatusChecked) {
    return <b>Refreshing user...</b>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<HomePage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/shoppinglist" element={<div>Shopping List</div>} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
