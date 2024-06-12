import { Footer } from 'components/Footer/Footer';
import { Container } from './RecipesPage.styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesList } from '../../redux/recipesSlice/recipesOperations';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { LoadMoreBtn } from 'components/LoadMoreButton/LoadMoreButton';
import { SearchBarMobile } from 'components/SearchBar/SearchBarMobile';

export const RecipesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipesList());
  }, [dispatch]);
  return (
    <Container>
      <SearchBarMobile />
      <RecipesList />
      <LoadMoreBtn />
      <Footer />
    </Container>
  );
};
