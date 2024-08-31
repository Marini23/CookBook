import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesList } from '../../redux/favoritesSlice/favoritesOperations';
import { selectIsLoadingFavorites, selectUserId } from '../../redux/selectors';
import { Container } from './FavoritesPage.styled';
import { FavoritesList } from 'components/FavoritesList/FavoritesList';
import { Loader } from 'components/Loader/Loader';
export const FavoritesPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const isLoading = useSelector(selectIsLoadingFavorites);

  useEffect(() => {
    dispatch(getFavoritesList(userId));
  }, [dispatch, userId]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <Container>
        {isLoading && <Loader />}
        <FavoritesList windowWidth={windowWidth} />
      </Container>
    </>
  );
};
