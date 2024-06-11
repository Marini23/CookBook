import { Footer } from 'components/Footer/Footer';
import { Container } from './RecipesPage.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesList } from '../../redux/recipesSlice/recipesOperations';
import { RecipesList } from 'components/RecipesList/RecipesList';

export const RecipesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipesList());
  }, [dispatch]);
  return (
    <Container>
      <RecipesList />
      <Footer />
    </Container>
  );
};
