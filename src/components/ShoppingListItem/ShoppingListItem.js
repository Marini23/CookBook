import {
  Btn,
  BtnContainer,
  CircleIcon,
  ContainerDeleteIcon,
  DeleteIcon,
  DoneCircleIcon,
  DoneIcon,
  DoneLabelIngredient,
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
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementIngredient,
  deleteIngredientItem,
  incrementIngredient,
  updateIngredientDone,
} from '../../redux/shoppingSlice/shoppingOperations';
import { selectUserId } from '../../redux/selectors';
import doneIcon from '../../images/done_icon.svg';

export const ShoppingListItem = ({ ingredient }) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const { food, foodId, weight, done } = ingredient;
  const capitalizedWord = capitalizeFirstLetter(food);

  const handleDoneClick = () => {
    dispatch(
      updateIngredientDone({
        userId,
        foodId,
        currentDoneState: done,
      })
    );
  };

  return (
    <ListItem>
      <div onClick={handleDoneClick}>
        {done ? (
          <DoneCircleIcon>
            <DoneIcon src={doneIcon} alt="done icon" />
          </DoneCircleIcon>
        ) : (
          <CircleIcon></CircleIcon>
        )}
      </div>
      <IngredientInfo>
        {done ? (
          <h5>
            <DoneLabelIngredient>{capitalizedWord}</DoneLabelIngredient>
          </h5>
        ) : (
          <LabelIngredient>{capitalizedWord}</LabelIngredient>
        )}

        <BtnContainer>
          <Btn type="button">
            <MinusIcon
              src={minusIcon}
              alt="minus icon"
              onClick={() => dispatch(decrementIngredient({ userId, foodId }))}
            />
          </Btn>
          <NumberWeight>{Math.ceil(weight)}</NumberWeight>
          <Btn type="button">
            <PlusIcon
              src={plusIcon}
              alt="plus icon"
              onClick={() => dispatch(incrementIngredient({ userId, foodId }))}
            />
          </Btn>
          <TextWeight>g</TextWeight>
        </BtnContainer>
      </IngredientInfo>
      <ContainerDeleteIcon>
        <DeleteIcon
          src={deleteIcon}
          alt="delete icon"
          onClick={() => dispatch(deleteIngredientItem({ userId, foodId }))}
        />
      </ContainerDeleteIcon>
    </ListItem>
  );
};
