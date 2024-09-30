import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesList } from '../../redux/favoritesSlice/favoritesOperations';
import { selectIsLoadingFavorites, selectUserId } from '../../redux/selectors';
import { Container, FilterContainer } from './FavoritesPage.styled';
import { FavoritesList } from 'components/FavoritesList/FavoritesList';
import { Loader } from 'components/Loader/Loader';
import { ButtonFilter } from 'components/ButtonFilter/ButtonFilter';
import { Filter } from 'components/Filter/FilterTabletDesktop';

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const isLoading = useSelector(selectIsLoadingFavorites);

  const isTabletOrDesktopScreen = useMediaQuery({
    query: '(min-width: 744px)',
  });

  useEffect(() => {
    dispatch(getFavoritesList(userId));
  }, [dispatch, userId]);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <>
      <Container>
        {' '}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {isTabletOrDesktopScreen ? (
              <>
                {' '}
                <ButtonFilter
                  isFilterVisible={isFilterVisible}
                  toggleFilterVisibility={toggleFilterVisibility}
                />
                <FilterContainer $isvisible={isFilterVisible}>
                  <Filter filterType="favorites" />
                </FilterContainer>{' '}
              </>
            ) : null}
            <FavoritesList />
          </>
        )}
      </Container>
    </>
  );
};
