import { useSelector } from 'react-redux';
import { selectFavoritesRecipes } from '../../redux/selectors';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';
import { Container, List, Title } from './FavoritesList.styled';

export const FavoritesList = () => {
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  console.log(favoritesRecipes);

  return (
    <Container>
      <Title>FAVORITES RECIPES</Title>
      <List>
        {favoritesRecipes.map(recipe => {
          return <RecipeCard recipe={recipe} key={recipe.recipe.id} />;
        })}
      </List>
    </Container>
  );
};
