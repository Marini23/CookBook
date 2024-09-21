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
import { selectIsLoggedIn, selectIsRefreshing } from '../redux/selectors';
import { ShoppingListPage } from 'pages/ShoppingListPage/ShoppingListPage';
import { Loader } from './Loader/Loader';
import { ScrollToTop } from 'utils';

export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <ScrollToTop />
      <Routes location={background || location}>
        <Route path="/" element={<Layuot />}>
          <Route index element={isLoggedIn ? <RecipesPage /> : <HomePage />} />
          <Route
            path="/recipes"
            element={<PrivateRoute component={<RecipesPage />} />}
          />
          <Route
            path="/favorites"
            element={<PrivateRoute component={<FavoritesPage />} />}
          />
          <Route
            path="/recipes/:recipeId"
            element={<PrivateRoute component={<RecipeInfoPage />} />}
          />
          <Route
            path="/shoppinglist"
            element={<PrivateRoute component={<ShoppingListPage />} />}
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="/login" element={<ModalWindow />} />
          <Route path="/register" element={<ModalWindow />} />
        </Routes>
      )}
    </div>
  );
};
