import { useSelector } from 'react-redux';
import { selectFavoritesRecipes } from '../../redux/selectors';
import {
  Container,
  IconPlus,
  ItemAddRecipe,
  LinkItem,
  List,
  Title,
} from './FavoritesList.styled';

import { RecipeCardFavorite } from 'components/RecipeCardFavorite/RecipeCardFavorite';
import diskoverPlus from '../../images/diskover_plus.svg';

export const FavoritesList = () => {
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  console.log(favoritesRecipes);
  return (
    <Container>
      <Title>FAVORITES RECIPES</Title>
      <List>
        {favoritesRecipes.map(recipe => {
          return <RecipeCardFavorite recipe={recipe} key={recipe.recipe.id} />;
        })}
        <LinkItem href="/CookBook/recipes">
          <ItemAddRecipe>
            <IconPlus src={diskoverPlus} alt="recipe search" />
            DISKOVER RECIPES
          </ItemAddRecipe>
        </LinkItem>
      </List>
    </Container>
  );
};
