import { Footer } from 'components/Footer/Footer';
import {
  ArrowIcon,
  Banner,
  ButtonFilter,
  Container,
} from './RecipesPage.styled';
import { useEffect, useState } from 'react';
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
import arrowUp from '../../images/arrow_up_icon.svg';
import arrowDown from '../../images/arrow_down-icon.svg';

export const RecipesPage = () => {
  const dispatch = useDispatch();
  const totalHits = useSelector(selectTotalHits);
  const recipes = useSelector(selectResipes);
  const query = useSelector(selectQuery);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    // dispatch(getRecipesList());
    dispatch(getRecipesListByQuery(query));
  }, [dispatch, query]);

  const isLoadMore = recipes.length < totalHits;

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <Container>
      <div>
        {query !== 'popular' && (
          <ButtonFilter type="button" onClick={toggleFilterVisibility}>
            <ArrowIcon
              src={isFilterVisible ? arrowUp : arrowDown}
              alt="Toggle Filters Icon"
            />
            {isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
          </ButtonFilter>
        )}
        <div>
          <Banner>
            <source
              srcSet={`${bannerDesktop_2x} 2x`}
              media="(min-width: 1440px)"
            />
            <img src={bannerDesktop} alt="banner" />
          </Banner>
        </div>
      </div>
      <RecipesList />
      {isLoadMore ? <LoadMoreBtn /> : null}
      <Footer />
    </Container>
  );
};
