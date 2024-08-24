import plusIcon from '../../images/plusIcon.svg';
import bagIcon from '../../images/bag_icon.svg';
import {
  BagIcon,
  Btn,
  BtnLink,
  Container,
  PlusIcon,
  StyledNavLink,
  Text,
  Title,
  WrapperInfo,
} from './EmptyShoppingList.styled';
import { useAddIngredient } from 'customHooks';
import { NewIngredientForm } from 'components/NewIngredientForm/NewIngredientForm';
import { useLocation } from 'react-router-dom';

export const EmptyShoppingList = () => {
  const location = useLocation();
  const {
    showInput,
    newIngredientName,
    toggleInput,
    handleInputChange,
    handleSubmit,
  } = useAddIngredient();
  return (
    <Container>
      <Title>SHOPPING LIST</Title>
      <WrapperInfo>
        <BagIcon src={bagIcon} alt="bag icon" />
        <Text>
          Your shopping list is currently empty. To add products, please visit
          the recipe page and select 'Save Ingredients to Shopping List'.
        </Text>
        <StyledNavLink
          to={`/recipes`}
          state={{ from: location }}
          style={{ textDecoration: 'none' }}
        >
          <BtnLink type="button">
            {' '}
            <PlusIcon src={plusIcon} alt="plus icon" />
            ADD RECIPE
          </BtnLink>
        </StyledNavLink>
        {showInput && (
          <NewIngredientForm
            value={newIngredientName}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        )}
        <Btn type="button" onClick={toggleInput}>
          {' '}
          <PlusIcon src={plusIcon} alt="plus icon" />
          ADD INGREDIENT
        </Btn>
      </WrapperInfo>
    </Container>
  );
};
