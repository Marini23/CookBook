import { useSelector } from 'react-redux';
import {
  selectMergedIndredients,
  selectPhotoRecipes,
  selectRecipesInShoppingList,
} from '../../redux/selectors';

export const ShoppingList = () => {
  const addedRecipes = useSelector(selectRecipesInShoppingList);
  const ingredientsList = useSelector(selectMergedIndredients);
  const photos = useSelector(selectPhotoRecipes);
  console.log(addedRecipes);
  console.log(ingredientsList);
  console.log(photos);
};
