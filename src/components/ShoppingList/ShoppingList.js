import { SliderImages } from 'components/SliderImages/SliderImages';
import { Container, Title } from './ShoppingList.styled';
// import { useSelector } from 'react-redux';
// import { selectPhotoRecipes } from '../../redux/selectors';

export const ShoppingList = () => {
  // const images = useSelector(selectPhotoRecipes);
  return (
    <Container>
      <Title>SHOPPING LIST</Title>
      {/* {images.length > 0 && <SliderImages />} */}
      <SliderImages />
    </Container>
  );
};
