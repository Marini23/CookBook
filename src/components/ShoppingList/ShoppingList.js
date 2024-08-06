import { SliderImages } from 'components/SliderImages/SliderImages';
import { Container, List, Title, TitleTwo } from './ShoppingList.styled';
import { ShoppingListItem } from 'components/ShoppingListItem/ShoppingListItem';
import { useSelector } from 'react-redux';
import { selectMergedIndredients } from '../../redux/selectors';
// import { useSelector } from 'react-redux';
// import { selectPhotoRecipes } from '../../redux/selectors';

export const ShoppingList = () => {
  const ingredients = useSelector(selectMergedIndredients);
  return (
    <Container>
      <Title>SHOPPING LIST</Title>
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
    </Container>
  );
};
