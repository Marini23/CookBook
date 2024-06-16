import {
  ClearButton,
  ClearIcon,
  Container,
  ContainerCheckbox,
  FormFilter,
  InputCheckbox,
  InputNumber,
  Label,
  LabelCheckbox,
  Span,
  WrapCheckbox,
  WrapFilter,
  WrapItem,
} from './FilterMobile.styled';
import clearIcon from '../../images/clear_filter_icon.svg';

export const FilterMobileForm = () => {
  return (
    <FormFilter>
      <Container>
        <WrapFilter>
          <Label>Calories</Label>
          <WrapItem>
            <Span>From</Span>
            <InputNumber type="number" name="caloriesFrom" />
          </WrapItem>
          <WrapItem>
            <Span>To</Span>
            <InputNumber type="number" name="caloriesTo" />
          </WrapItem>
        </WrapFilter>
        <WrapFilter>
          <Label>Ingredients</Label>
          <WrapItem>
            <Span>Up to</Span>
            <InputNumber type="number" name="ingredientsTo" />
          </WrapItem>
        </WrapFilter>
      </Container>
      <ContainerCheckbox>
        <Label>Diet</Label>
        <WrapCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="diet" value="Vegetarian" />
            Vegetarian
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="diet" value="Low-Carb" />
            Low-Carb
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="diet" value="Vegan" />
            Vegan
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="diet" value="Low-Fat" />
            Low-Fat
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="diet" value="Paleo" />
            Paleo
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="diet" value="Low-Sodium" />
            Low-Sodium
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="diet" value="High-Fiber" />
            High-Fiber
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="diet" value="Low-Sugar" />
            Low-Sugar
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="diet" value="Balanced" />
            Balanced
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="diet" value="Alcohol-Free" />
            Alcohol-Free
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="diet" value="Immunity" />
            Immunity
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="diet" value="High-Protein" />
            High-Protein
          </LabelCheckbox>
        </WrapCheckbox>
      </ContainerCheckbox>
      <ContainerCheckbox>
        <Label>Allergies</Label>
        <WrapCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="allergies" value="Gluten" />
            Gluten
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="allergies" value="Wheat" />
            Wheat
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="allergies" value="Eggs" />
            Eggs
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="allergies" value="Fish" />
            Fish
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="allergies" value="Soy" />
            Soy
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="allergies" value="ShellFish" />
            ShellFish
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="allergies" value="Peanuts" />
            Peanuts
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox type="checkbox" name="allergies" value="Tree nuts" />
            Tree nuts
          </LabelCheckbox>
        </WrapCheckbox>
      </ContainerCheckbox>
      <ClearButton type="button">
        {' '}
        <ClearIcon src={clearIcon} alt="Clear Filters Icon" />
        CLEAR FILTERS
      </ClearButton>
    </FormFilter>
  );
};
