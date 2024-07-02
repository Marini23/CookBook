import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesList } from '../../redux/favoritesSlice/favoritesOperations';
import { selectUserId } from '../../redux/selectors';
import { Container } from './FavoritesPage.styled';
import { FavoritesList } from 'components/FavoritesList/FavoritesList';
import { Footer } from 'components/Footer/Footer';
export const FavoritesPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

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
        <FavoritesList windowWidth={windowWidth} />
      </Container>
      <Footer />
    </>
  );
};
