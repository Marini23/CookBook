import { Footer } from 'components/Footer/Footer';
import { Container } from './RecipesPage.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesList } from '../../redux/recipesSlice/recipesOperations';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { LoadMoreBtn } from 'components/LoadMoreButton/LoadMoreButton';
import { selectResipes, selectTotalHits } from '../../redux/selectors';

export const RecipesPage = () => {
  const dispatch = useDispatch();
  const totalHits = useSelector(selectTotalHits);
  const recipes = useSelector(selectResipes);

  useEffect(() => {
    dispatch(getRecipesList());
  }, [dispatch]);

  const isLoadMore = recipes.length < totalHits;
  return (
    <Container>
      <RecipesList />
      {isLoadMore ? <LoadMoreBtn /> : null}
      <Footer />
    </Container>
  );
};
