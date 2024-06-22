import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { changeFilter, resetFilter } from '../../redux/filterSlice';

import clearIcon from '../../images/clear_filter_icon.svg';
import {
  ButtonContainer,
  ClearButton,
  ClearIcon,
  Container,
  ContainerCheckbox,
  FilterColums,
  FormFilter,
  InputCheckbox,
  InputNumber,
  Label,
  LabelCheckbox,
  Span,
  SubmitButton,
  WrapCheckbox,
  WrapCheckboxDiet,
  WrapFilter,
  WrapItem,
} from './Filter.styled';

export const Filter = () => {
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

  const onSubmit = data => {
    dispatch(changeFilter(data));
  };

  return (
    <FormFilter onSubmit={handleSubmit(onSubmit)}>
      <ButtonContainer>
        <ClearButton type="button" onClick={clearFilters}>
          {' '}
          <ClearIcon src={clearIcon} alt="Clear Filters Icon" />
          CLEAR FILTERS
        </ClearButton>
      </ButtonContainer>
      <FilterColums>
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
          <WrapCheckboxDiet>
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
                value="Low-Fat"
              />
              Low-Fat
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
                value="Balanced"
              />
              Balanced
            </LabelCheckbox>
            <LabelCheckbox>
              <InputCheckbox
                type="checkbox"
                {...register('diet')}
                value="High-Protein"
              />
              High-Protein
            </LabelCheckbox>
          </WrapCheckboxDiet>
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
            <LabelCheckbox>
              <InputCheckbox
                type="checkbox"
                {...register('allergies')}
                value="Alcohol-Free"
              />
              Alcohol
            </LabelCheckbox>
            <LabelCheckbox>
              <InputCheckbox
                type="checkbox"
                {...register('allergies')}
                value="Red-Meat-Free"
              />
              Red meat
            </LabelCheckbox>
            <LabelCheckbox>
              <InputCheckbox
                type="checkbox"
                {...register('allergies')}
                value="No-Oil-Added"
              />
              Oil
            </LabelCheckbox>
            <LabelCheckbox>
              <InputCheckbox
                type="checkbox"
                {...register('allergies')}
                value="Dairy-Free"
              />
              Dairy
            </LabelCheckbox>
          </WrapCheckbox>
        </ContainerCheckbox>
      </FilterColums>
      <ButtonContainer>
        <SubmitButton type="submit">Done</SubmitButton>
      </ButtonContainer>
    </FormFilter>
  );
};
