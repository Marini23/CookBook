import { useSelector } from 'react-redux';
import { selectRecipesInShoppingList } from '../../redux/selectors';

export const ShoppingList = () => {
  const addedRecipes = useSelector(selectRecipesInShoppingList);
  console.log(addedRecipes);
};
