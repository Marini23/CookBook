import { Footer } from 'components/Footer/Footer';
import { Banner, Container } from './RecipesPage.styled';
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
import bannerDesktop from '../../images/filter_banner_desktop.jpg';
import bannerDesktop_2x from '../../images/filter_banner_desktop2x.jpg';

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
      <Banner>
        <source srcSet={`${bannerDesktop_2x} 2x`} media="(min-width: 1440px)" />
        <img src={bannerDesktop} alt="banner" />
      </Banner>
      <RecipesList />
      {isLoadMore ? <LoadMoreBtn /> : null}
      <Footer />
    </Container>
  );
};
