import { Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from 'pages/HomePage/HomePage';
import { Layuot } from './Layout/Layout';
import { RecipesPage } from 'pages/RecipesPage/ResipesPage';
import { FavoritesPage } from 'pages/FavoritesPage/FavoritesPage';
import { RecipeInfoPage } from 'pages/RecipeInfoPage/RecipeInfoPage';
import { PrivateRoute } from './PrivateRoute';
import { ModalWindow } from './Modal/Modal';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from '../redux/authSlice/authOperations';
import { selectIsLoggedIn } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  console.log(isLoggedIn);



  return (
    <div>
      <Routes location={background || location}>
        <Route path="/" element={<Layuot />}>
          <Route index element={isLoggedIn ? <RecipesPage /> : <HomePage />} />
          <Route
            path="/recipes"
            element={
              <PrivateRoute redirectTo="/" component={<RecipesPage />} />
            }
          />
          <Route
            path="/favorites"
            element={
              <PrivateRoute redirectTo="/" component={<FavoritesPage />} />
            }
          />
          <Route
            path="/recipes/:recipeId"
            element={
              <PrivateRoute redirectTo="/" component={<RecipeInfoPage />} />
            }
          />
          <Route path="/shoppinglist" element={<div>Shopping List</div>} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>

      {background && (
        <Routes>
          <Route path="/login" element={<ModalWindow />} />
        </Routes>
      )}
      {background && (
        <Routes>
          <Route path="/register" element={<ModalWindow />} />
        </Routes>
      )}
    </div>
  );
};
