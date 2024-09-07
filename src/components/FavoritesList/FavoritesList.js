import { useSelector } from 'react-redux';
import { selectFavoritesRecipes } from '../../redux/selectors';
import {
  Container,
  IconPlus,
  ItemAddRecipe,
  List,
  Title,
} from './FavoritesList.styled';

import { RecipeCardFavorite } from 'components/RecipeCardFavorite/RecipeCardFavorite';

export const FavoritesList = () => {
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  return (
    <Container>
      <Title>FAVORITES RECIPES</Title>
      <List>
        {favoritesRecipes.map(recipe => {
          return <RecipeCardFavorite recipe={recipe} key={recipe.recipe.id} />;
        })}
        <ItemAddRecipe href="/CookBook/recipes">
          <IconPlus />
          ADD RECIPE
        </ItemAddRecipe>
      </List>
    </Container>
  );
};
