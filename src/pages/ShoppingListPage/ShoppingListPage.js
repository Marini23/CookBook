import { useDispatch, useSelector } from 'react-redux';
import {
  selectPhotoRecipes,
  selectRecipesInShoppingList,
  selectUserId,
} from '../../redux/selectors';
import { Container } from './ShoppingListPage.styled';
import { ShoppingList } from 'components/ShoppingList/ShoppingList';
import { useEffect } from 'react';
import { getShoppingList } from '../../redux/shoppingSlice/shoppingOperations';

export const ShoppingListPage = () => {
  const userId = useSelector(selectUserId);
  const addedRecipes = useSelector(selectRecipesInShoppingList);
  // const ingredientsList = useSelector(selectMergedIndredients);
  const photos = useSelector(selectPhotoRecipes);
  const dispatch = useDispatch();
  console.log(addedRecipes);
  console.log(photos);

  useEffect(() => {
    dispatch(getShoppingList(userId));
  }, [dispatch, userId]);

  return (
    <Container>
      <ShoppingList />
    </Container>
  );
};
