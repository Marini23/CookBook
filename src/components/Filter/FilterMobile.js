import { useForm } from 'react-hook-form';
import {
  ButtonContainer,
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
  SubmitButton,
  WrapCheckbox,
  WrapFilter,
  WrapItem,
} from './FilterMobile.styled';
import clearIcon from '../../images/clear_filter_icon.svg';
import { connect, useDispatch } from 'react-redux';
import { changeFilter, resetFilter } from '../../redux/filterSlice';

export const FilterMobileForm = ({ isClose }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      caloriesFrom: '',
      caloriesTo: '',
      ingredientsTo: '',
      diet: [],
      allergies: [],
    },
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(changeFilter(data));
    isClose();
  };

  const clearFilters = () => {
    reset();
    dispatch(
      resetFilter({
        caloriesFrom: '',
        caloriesTo: '',
        ingredientsTo: '',
        diet: [],
        allergies: [],
      })
    );
  };
  return (
    <FormFilter onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <WrapFilter>
          <Label>Calories</Label>
          <WrapItem>
            <Span>From</Span>
            <InputNumber type="number" {...register('caloriesFrom')} />
          </WrapItem>
          <WrapItem>
            <Span>To</Span>
            <InputNumber type="number" {...register('caloriesTo')} />
          </WrapItem>
        </WrapFilter>
        <WrapFilter>
          <Label>Ingredients</Label>
          <WrapItem>
            <Span>Up to</Span>
            <InputNumber type="number" {...register('ingredientsTo')} />
          </WrapItem>
        </WrapFilter>
      </Container>
      <ContainerCheckbox>
        <Label>Diet</Label>
        <WrapCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('diet')}
              value="Vegetarian"
            />
            Vegetarian
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('diet')}
              value="Low-Carb"
            />
            Low-Carb
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('diet')}
              value="Vegan"
            />
            Vegan
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('diet')}
              value="Low-Fat"
            />
            Low-Fat
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('diet')}
              value="Paleo"
            />
            Paleo
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('diet')}
              value="Low-Sodium"
            />
            Low-Sodium
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('diet')}
              value="High-Fiber"
            />
            High-Fiber
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('diet')}
              value="Low-Sugar"
            />
            Low-Sugar
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('diet')}
              value="Balanced"
            />
            Balanced
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('diet')}
              value="Alcohol-Free"
            />
            Alcohol-Free
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('diet')}
              value="Immunity"
            />
            Immunity
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('diet')}
              value="High-Protein"
            />
            High-Protein
          </LabelCheckbox>
        </WrapCheckbox>
      </ContainerCheckbox>
      <ContainerCheckbox>
        <Label>Allergies</Label>
        <WrapCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('allergies')}
              value="Gluten-Free"
            />
            Gluten
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('allergies')}
              value="Wheat-Free"
            />
            Wheat
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('allergies')}
              value="Egg-Free"
            />
            Eggs
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('allergies')}
              value="Fish-Free"
            />
            Fish
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('allergies')}
              value="Soy-Free"
            />
            Soy
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('allergies')}
              value="ShellFish-Free"
            />
            ShellFish
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('allergies')}
              value="Peanut-Free"
            />
            Peanuts
          </LabelCheckbox>
          <LabelCheckbox>
            <InputCheckbox
              type="checkbox"
              {...register('allergies')}
              value="Tree-Nut-Free"
            />
            Tree nuts
          </LabelCheckbox>
        </WrapCheckbox>
      </ContainerCheckbox>
      <ClearButton type="button" onClick={clearFilters}>
        {' '}
        <ClearIcon src={clearIcon} alt="Clear Filters Icon" />
        CLEAR FILTERS
      </ClearButton>
      <ButtonContainer>
        <SubmitButton type="submit">DONE</SubmitButton>
      </ButtonContainer>
    </FormFilter>
  );
};

export default connect(
  ({ caloriesFrom, caloriesTo, ingredientsTo, diet, allergies }) => ({
    caloriesFrom,
    caloriesTo,
    ingredientsTo,
    diet,
    allergies,
  }),
  changeFilter
)(FilterMobileForm);
