import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesList } from '../../redux/favoritesSlice/favoritesOperations';
import { selectUserId } from '../../redux/selectors';
import { Container } from './FavoritesPage.styled';
import { FavoritesList } from 'components/FavoritesList/FavoritesList';

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  useEffect(() => {
    dispatch(getFavoritesList(userId));
  }, [dispatch, userId]);

  return (
    <Container>
      <FavoritesList />
    </Container>
  );
};
