import { useSelector } from 'react-redux';
import { selectFavoritesRecipes } from '../../redux/selectors';
import {
  Container,
  IconPlus,
  ImgAddRecipe,
  ItemAddRecipe,
  List,
  Title,
} from './FavoritesList.styled';

import addRecipeImg from '../../images/diskover_recipes.jpg';
import addRecipeImgDesktop from '../../images/Frame_2966.jpg';
import { RecipeCardFavorite } from 'components/RecipeCardFavorite/RecipeCardFavorite';
import diskoverPlus from '../../images/diskover_plus.svg';

export const FavoritesList = ({ windowWidth }) => {
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  console.log(favoritesRecipes);

  return (
    <Container>
      <Title>FAVORITES RECIPES</Title>
      <List>
        {favoritesRecipes.map(recipe => {
          return <RecipeCardFavorite recipe={recipe} key={recipe.recipe.id} />;
        })}
        {/* {windowWidth < 743 && (
          <ImgAddRecipe src={addRecipeImg} alt="recipe search" />
        )}
        {windowWidth > 1439 && (
          <ImgAddRecipe src={addRecipeImg} alt="recipe search" />
        )} */}
        <ItemAddRecipe>
          <IconPlus src={diskoverPlus} alt="recipe search" />
          DISKOVER RECIPES
        </ItemAddRecipe>
      </List>
    </Container>
  );
};
