import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesList } from '../../redux/favoritesSlice/favoritesOperations';
import { selectUserId } from '../../redux/selectors';

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  useEffect(() => {
    dispatch(getFavoritesList(userId));
  }, [dispatch, userId]);

  return <div>Favorites</div>;
};
