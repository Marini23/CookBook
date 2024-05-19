import { HomePage } from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout/Layout';
import { useEffect } from 'react';
import { fetchCurrentUser } from '../redux/authSlice/authOperations';
import { useDispatch } from 'react-redux';
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
    // writeUserData(currentUser);
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<HomePage />} />
          <Route path="/recipes" element={<div>Recipies List</div>} />
          <Route path="/favorites" element={<div>Favorites</div>} />
          <Route path="/shoppinglist" element={<div>Shopping List</div>} />
          <Route path="*" element={<div>Homepage</div>} />
        </Route>
      </Routes>
    </div>
  );
};
