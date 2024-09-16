import {
  Banner,
  Container,
  FilterContainer,
  FilterDesktop,
} from './RecipesPage.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipesListByQuery } from '../../redux/recipesSlice/recipesOperations';
import { RecipesList } from 'components/RecipesList/RecipesList';
import { LoadMoreBtn } from 'components/LoadMoreButton/LoadMoreButton';
import {
  selectIsLoadingRecipes,
  selectQuery,
  selectResipes,
  selectTotalHits,
  selectUserId,
} from '../../redux/selectors';
import bannerTablet from '../../images/banner_tablet.jpg';
import bannerTablet_2x from '../../images/bg_filter_tablet_2x.jpg';
import bannerTablet_3x from '../../images/bg_filter_tablet_3x.jpg';
import bannerDesktop from '../../images/filter_banner_desktop.jpg';
import bannerDesktop_2x from '../../images/filter_banner_desktop2x.jpg';
// import arrowUp from '../../images/arrow_up_icon.svg';
// import arrowDown from '../../images/arrow_down-icon.svg';
import { Filter } from 'components/Filter/FilterTabletDesktop';
import { getFavoritesList } from '../../redux/favoritesSlice/favoritesOperations';
import { Loader } from 'components/Loader/Loader';
import { ButtonFilter } from 'components/ButtonFilter/ButtonFilter';

export const RecipesPage = () => {
  const dispatch = useDispatch();
  const totalHits = useSelector(selectTotalHits);
  const recipes = useSelector(selectResipes);
  const query = useSelector(selectQuery);
  const userId = useSelector(selectUserId);
  const isLoading = useSelector(selectIsLoadingRecipes);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  useEffect(() => {
    dispatch(getRecipesListByQuery(query));
    dispatch(getFavoritesList(userId));
    if (query !== 'popular') {
      setIsFilterVisible(true);
    }
  }, [dispatch, query, userId]);

  const isLoadMore = recipes.length < totalHits;

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <>
      <Container>
        <FilterDesktop>
          {query !== 'popular' && (
            <ButtonFilter
              isFilterVisible={isFilterVisible}
              toggleFilterVisibility={toggleFilterVisibility}
            />
          )}
          {query === 'popular' && (
            <Banner>
              <source
                srcSet={`${bannerTablet}, ${bannerTablet_2x} 2x, ${bannerTablet_3x} 3x`}
                media="(min-width: 744px) and (max-width: 1439px)"
              />
              <source
                media="(min-width: 1440px)"
                srcSet={`${bannerDesktop_2x} 2x`}
              />
              <img src={bannerDesktop} alt="banner" />
            </Banner>
          )}
          <FilterContainer $isvisible={isFilterVisible}>
            <Filter filterType="recipes" />
          </FilterContainer>
        </FilterDesktop>
        {isLoading && <Loader />}
        <RecipesList />
        {isLoadMore ? <LoadMoreBtn /> : null}
      </Container>
    </>
  );
};
