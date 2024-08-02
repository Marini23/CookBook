import { useSelector } from 'react-redux';
import {
  selectMergedIndredients,
  selectPhotoRecipes,
  selectRecipesInShoppingList,
} from '../../redux/selectors';
import { Container } from './ShoppingListPage.styled';
import { ShoppingList } from 'components/ShoppingList/ShoppingList';

export const ShoppingListPage = () => {
  const addedRecipes = useSelector(selectRecipesInShoppingList);
  const ingredientsList = useSelector(selectMergedIndredients);
  const photos = useSelector(selectPhotoRecipes);
  console.log(addedRecipes);
  console.log(ingredientsList);
  console.log(photos);

  return (
    <Container>
      <ShoppingList />
    </Container>
  );
};
