import { useDispatch, useSelector } from 'react-redux';
import {
  selectIngredientsInShoppingList,
  selectIsLoadingShoppingList,
  selectUserId,
} from '../../redux/selectors';
import { Container } from './ShoppingListPage.styled';
import { ShoppingList } from 'components/ShoppingList/ShoppingList';
import { useEffect } from 'react';
import {
  getShoppingListIngredients,
  getShoppingListRecipes,
} from '../../redux/shoppingSlice/shoppingOperations';
import { EmptyShoppingList } from 'components/EmtyShoppingList/EmptyShoppingList';
import { Loader } from 'components/Loader/Loader';

export const ShoppingListPage = () => {
  const userId = useSelector(selectUserId);
  const ingredientsList = useSelector(selectIngredientsInShoppingList);
  const isLoading = useSelector(selectIsLoadingShoppingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingListRecipes(userId));
    dispatch(getShoppingListIngredients(userId));
  }, [dispatch, userId]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : ingredientsList.length > 0 ? (
        <ShoppingList />
      ) : (
        <EmptyShoppingList />
      )}
    </Container>
  );
};
