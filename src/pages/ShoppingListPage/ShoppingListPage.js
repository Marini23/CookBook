import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../redux/selectors';
import { Container } from './ShoppingListPage.styled';
import { ShoppingList } from 'components/ShoppingList/ShoppingList';
import { useEffect } from 'react';
import { getShoppingList } from '../../redux/shoppingSlice/shoppingOperations';

export const ShoppingListPage = () => {
  const userId = useSelector(selectUserId);
  // const ingredientsList = useSelector(selectMergedIndredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingList(userId));
  }, [dispatch, userId]);

  return (
    <Container>
      <ShoppingList />
    </Container>
  );
};
