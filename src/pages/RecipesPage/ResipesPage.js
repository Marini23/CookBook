import { Footer } from 'components/Footer/Footer';
import { Container } from './RecipesPage.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesListByQuery } from '../../redux/recipesSlice/recipesOperations';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { LoadMoreBtn } from 'components/LoadMoreButton/LoadMoreButton';
import {
  selectQuery,
  selectResipes,
  selectTotalHits,
} from '../../redux/selectors';

export const RecipesPage = () => {
  const dispatch = useDispatch();
  const totalHits = useSelector(selectTotalHits);
  const recipes = useSelector(selectResipes);
  const query = useSelector(selectQuery);

  useEffect(() => {
    // dispatch(getRecipesList());
    dispatch(getRecipesListByQuery(query));
  }, [dispatch, query]);

  const isLoadMore = recipes.length < totalHits;
  return (
    <Container>
      <RecipesList />
      {isLoadMore ? <LoadMoreBtn /> : null}
      <Footer />
    </Container>
  );
};
