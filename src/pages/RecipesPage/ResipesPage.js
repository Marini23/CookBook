import { Footer } from 'components/Footer/Footer';
import { Container } from './RecipesPage.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesList } from '../../redux/recipesSlice/recipesOperations';

export const RecipesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipesList());
  }, [dispatch]);
  return (
    <Container>
      <Footer />
    </Container>
  );
};
