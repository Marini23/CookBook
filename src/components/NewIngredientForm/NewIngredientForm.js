import {
  BtnNewIngredient,
  ContainerNewIngredient,
  InputNewIngredient,
} from './NewIngredientForm.styled';

export const NewIngredientForm = ({ value, onChange, onSubmit }) => {
  return (
    <ContainerNewIngredient>
      <InputNewIngredient
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Ingredient name"
      />
      <BtnNewIngredient type="button" onClick={onSubmit}>
        SAVE
      </BtnNewIngredient>
    </ContainerNewIngredient>
  );
};
