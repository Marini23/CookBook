import { SliderImages } from 'components/SliderImages/SliderImages';
import {
  AddBtn,
  Container,
  Icon,
  IconsContainer,
  List,
  PlusIcon,
  Title,
  TitleContainer,
  TitleTwo,
} from './ShoppingList.styled';
import { ShoppingListItem } from 'components/ShoppingListItem/ShoppingListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIngredientsInShoppingList,
  selectUserId,
} from '../../redux/selectors';
import plusIcon from '../../images/plus-icon_grey.svg';
import clearIcon from '../../images/trash_icon_yellow.svg';
import shareIcon from '../../images/share-icon.svg';
import { clearAllShoppingData } from '../../redux/shoppingSlice/shoppingOperations';
import { NewIngredientForm } from 'components/NewIngredientForm/NewIngredientForm';
import { useAddIngredient } from 'customHooks';

export const ShoppingList = () => {
  const ingredientsList = useSelector(selectIngredientsInShoppingList);
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();

  const {
    showInput,
    newIngredientName,
    toggleInput,
    handleInputChange,
    handleSubmit,
  } = useAddIngredient();

  const handleClearAll = () => {
    dispatch(clearAllShoppingData(userId));
  };

  return (
    <Container>
      <TitleContainer>
        <Title>SHOPPING LIST</Title>
        <IconsContainer>
          <Icon src={clearIcon} alt="clear icon" onClick={handleClearAll} />
          <Icon src={shareIcon} alt="share icon" />
        </IconsContainer>
      </TitleContainer>
      <SliderImages />
      <TitleTwo>INGREDIENTS</TitleTwo>
      <List>
        {ingredientsList.map(ingredient => {
          return (
            <ShoppingListItem ingredient={ingredient} key={ingredient.foodId} />
          );
        })}
      </List>
      {showInput && (
        <NewIngredientForm
          value={newIngredientName}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />
      )}
      <AddBtn type="button" onClick={toggleInput}>
        {' '}
        <PlusIcon src={plusIcon} alt="plus icon" />
        ADD INGREDIENT
      </AddBtn>
    </Container>
  );
};
