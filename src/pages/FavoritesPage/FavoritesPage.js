import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavoritesList } from '../../redux/favoritesSlice/favoritesOperations';
import { selectUserId } from '../../redux/selectors';
import { Container, ImgAddRecipe } from './FavoritesPage.styled';
import { FavoritesList } from 'components/FavoritesList/FavoritesList';
import { Footer } from 'components/Footer/Footer';
import addRecipeImg from '../../images/diskover_recipes.jpg';

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);

  useEffect(() => {
    dispatch(getFavoritesList(userId));
  }, [dispatch, userId]);

  return (
    <>
      <Container>
        <FavoritesList />
        <ImgAddRecipe src={addRecipeImg} alt="recipe search" />
      </Container>
      <Footer />
    </>
  );
};
