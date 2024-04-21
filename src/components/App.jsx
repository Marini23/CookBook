import { HomePage } from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import { Layuot } from './Layout/Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layuot />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<div>Register</div>} />
          <Route path="/login" element={<div>Log In</div>} />
          <Route path="/recipies" element={<div>Recipies List</div>} />
          <Route path="/favorites" element={<div>Favorites</div>} />
          <Route path="/shoppinglist" element={<div>Shopping List</div>} />
          <Route path="*" element={<div>Homepage</div>} />
        </Route>
      </Routes>
    </div>
  );
};
