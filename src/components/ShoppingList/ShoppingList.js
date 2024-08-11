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
import { useSelector } from 'react-redux';
import { selectMergedIndredients } from '../../redux/selectors';
// import { useSelector } from 'react-redux';
// import { selectPhotoRecipes } from '../../redux/selectors';
import plusIcon from '../../images/plus-icon_grey.svg';
import clearIcon from '../../images/trash_icon_yellow.svg';
import shareIcon from '../../images/share-icon.svg';

export const ShoppingList = () => {
  const ingredients = useSelector(selectMergedIndredients);
  // console.log(ingredients);
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
        {ingredients.map(ingredient => {
          // console.log(ingredient);
          return (
            <ShoppingListItem ingredient={ingredient} key={ingredient.foodId} />
          );
        })}
      </List>
      <AddBtn type="button">
        {' '}
        <PlusIcon src={plusIcon} alt="plus icon" />
        ADD INGREDIENT
      </AddBtn>
    </Container>
  );
};
