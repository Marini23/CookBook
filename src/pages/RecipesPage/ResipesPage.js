import {
  ArrowIcon,
  Banner,
  ButtonFilter,
  Container,
  FilterContainer,
  FilterDesktop,
  TextButtonFilter,
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
  selectUserId,
} from '../../redux/selectors';
import bannerTablet from '../../images/banner_tablet.jpg';
import bannerTablet_2x from '../../images/bg_filter_tablet_2x.jpg';
import bannerTablet_3x from '../../images/bg_filter_tablet_3x.jpg';
import bannerDesktop from '../../images/filter_banner_desktop.jpg';
import bannerDesktop_2x from '../../images/filter_banner_desktop2x.jpg';
import arrowUp from '../../images/arrow_up_icon.svg';
import arrowDown from '../../images/arrow_down-icon.svg';
import { Filter } from 'components/Filter/FilterTabletDesktop';
import { getFavoritesList } from '../../redux/favoritesSlice/favoritesOperations';
import { FooterForUser } from 'components/Footer/FooterForUser';

export const RecipesPage = () => {
  const dispatch = useDispatch();
  const totalHits = useSelector(selectTotalHits);
  const recipes = useSelector(selectResipes);
  const query = useSelector(selectQuery);
  const userId = useSelector(selectUserId);
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
    <Container>
      <FilterDesktop>
        {query !== 'popular' && (
          <ButtonFilter type="button" onClick={toggleFilterVisibility}>
            <ArrowIcon
              src={isFilterVisible ? arrowUp : arrowDown}
              alt="Toggle Filters Icon"
            />
            <TextButtonFilter>
              {isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
            </TextButtonFilter>
          </ButtonFilter>
        )}
        {query === 'popular' && (
          <>
            {console.log('Banner should render for popular query')}
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
          </>
        )}
        <FilterContainer $isvisible={isFilterVisible}>
          <Filter />
        </FilterContainer>
      </FilterDesktop>
      <RecipesList />
      {isLoadMore ? <LoadMoreBtn /> : null}
      <FooterForUser />
    </Container>
  );
};
