import { nanoid } from 'nanoid';
import { SliderImages } from 'components/SliderImages/SliderImages';
import {
  AddBtn,
  BtnNewIngredient,
  Container,
  ContainerNewIngredient,
  Icon,
  IconsContainer,
  InputNewIngredient,
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
// import { useSelector } from 'react-redux';
// import { selectPhotoRecipes } from '../../redux/selectors';
import plusIcon from '../../images/plus-icon_grey.svg';
import clearIcon from '../../images/trash_icon_yellow.svg';
import shareIcon from '../../images/share-icon.svg';
import { useState } from 'react';
import { addNewIngredient } from '../../redux/shoppingSlice/shoppingOperations';

export const ShoppingList = () => {
  const ingredientsList = useSelector(selectIngredientsInShoppingList);
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  // console.log(ingredientsList);
  const [showInput, setShowInput] = useState(false);
  const [newIngredientName, setNewIngredientName] = useState('');

  const handleAddClick = () => {
    setShowInput(prevState => !prevState);
  };

  const handleInputChange = e => {
    setNewIngredientName(e.target.value);
  };

  const handleSubmit = () => {
    if (newIngredientName !== '') {
      const newFoodId = nanoid();

      const newIngredient = {
        done: false,
        food: newIngredientName,
        foodId: newFoodId,
        weight: 100,
      };
      dispatch(addNewIngredient({ userId, newIngredient })); // Dispatch the action to add the new ingredient
    }
    setNewIngredientName('');
    setShowInput(false);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>SHOPPING LIST</Title>
        <IconsContainer>
          <Icon src={clearIcon} alt="clear icon" />
          <Icon src={shareIcon} alt="share icon" />
        </IconsContainer>
      </TitleContainer>
      <SliderImages />
      <TitleTwo>INGREDIENTS</TitleTwo>
      <List>
        {ingredientsList.map(ingredient => {
          // console.log(ingredient);
          return (
            <ShoppingListItem ingredient={ingredient} key={ingredient.foodId} />
          );
        })}
      </List>
      {showInput && (
        <ContainerNewIngredient>
          <InputNewIngredient
            type="text"
            value={newIngredientName}
            onChange={handleInputChange}
            placeholder="Ingredient name"
          />
          <BtnNewIngredient type="submit" onClick={handleSubmit}>
            SAVE
          </BtnNewIngredient>
        </ContainerNewIngredient>
      )}
      <AddBtn type="button" onClick={handleAddClick}>
        {' '}
        <PlusIcon src={plusIcon} alt="plus icon" />
        ADD INGREDIENT
      </AddBtn>
      {/* {!showInput && (
        <AddBtn type="button" onClick={handleAddClick}>
          {' '}
          <PlusIcon src={plusIcon} alt="plus icon" />
          ADD INGREDIENT
        </AddBtn>
      )} */}
    </Container>
  );
};
