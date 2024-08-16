import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../redux/selectors';
import { Container } from './ShoppingListPage.styled';
import { ShoppingList } from 'components/ShoppingList/ShoppingList';
import { useEffect } from 'react';
import {
  getShoppingListIngredients,
  getShoppingListRecipes,
} from '../../redux/shoppingSlice/shoppingOperations';
import { FooterForUser } from 'components/Footer/FooterForUser';

export const ShoppingListPage = () => {
  const userId = useSelector(selectUserId);
  // const ingredientsList = useSelector(selectMergedIndredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingListRecipes(userId));
    dispatch(getShoppingListIngredients(userId));
  }, [dispatch, userId]);

  return (
    <Container>
      <ShoppingList />
      <FooterForUser />
    </Container>
  );
};
