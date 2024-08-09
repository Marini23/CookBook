import {
  Btn,
  BtnContainer,
  CircleIcon,
  ContainerDeleteIcon,
  DeleteIcon,
  IngredientInfo,
  LabelIngredient,
  ListItem,
  MinusIcon,
  NumberWeight,
  PlusIcon,
  TextWeight,
} from './ShoppingListItem.styled';
import { capitalizeFirstLetter } from '../../utils'; // Ensure this path is correct
import minusIcon from '../../images/minusIcon.svg';
import plusIcon from '../../images/plusIcon.svg';
import deleteIcon from '../../images/trash_icon.svg';

export const ShoppingListItem = ({ ingredient }) => {
  const capitalizedWord = capitalizeFirstLetter(ingredient.food);

  return (
    <ListItem>
      <CircleIcon></CircleIcon>
      <IngredientInfo>
        <LabelIngredient>{capitalizedWord}</LabelIngredient>
        <BtnContainer>
          <Btn type="button">
            <MinusIcon src={minusIcon} alt="minus icon" />
          </Btn>
          <NumberWeight>{Math.ceil(ingredient.weight)}</NumberWeight>
          <Btn type="button">
            <PlusIcon src={plusIcon} alt="plus icon" />
          </Btn>
          <TextWeight>g</TextWeight>
        </BtnContainer>
      </IngredientInfo>
      <ContainerDeleteIcon>
        <DeleteIcon src={deleteIcon} alt="delete icon" />
      </ContainerDeleteIcon>
    </ListItem>
  );
};
