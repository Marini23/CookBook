import { useForm } from 'react-hook-form';
import {
  ButtonContainer,
  ClearButton,
  ClearIcon,
  CloseIcon,
  CloseIconContainer,
  CloseText,
  Container,
  ContainerCheckbox,
  FormFilter,
  FormWrapper,
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
import closeIcon from '../../images/close_filter_mobile.svg';
import clearIcon from '../../images/clear_filter_icon.svg';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
  changeRecipesFilter,
  resetRecipesFilter,
} from '../../redux/filterSlice';
import { selectRecipesFilters } from '../../redux/selectors';

export const FilterMobileForm = ({ isClose }) => {
  const filters = useSelector(selectRecipesFilters);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      caloriesFrom: filters.caloriesFrom || '',
      caloriesTo: filters.caloriesTo || '',
      ingredientsTo: filters.ingredientsTo || '',
      diet: filters.diet || [],
      allergies: filters.allergies || [],
    },
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(changeRecipesFilter(data));
    isClose();
  };

  const clearFilters = () => {
    reset();
    dispatch(
      resetRecipesFilter({
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
      <FormWrapper>
        <CloseIconContainer>
          <CloseText>FILTER</CloseText>
          <CloseIcon src={closeIcon} alt="Close icon" onClick={isClose} />
        </CloseIconContainer>
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
        <ClearButton type="button" onClick={clearFilters}>
          {' '}
          <ClearIcon src={clearIcon} alt="Clear Filters Icon" />
          CLEAR FILTERS
        </ClearButton>
        <ButtonContainer>
          <SubmitButton type="submit">Done</SubmitButton>
        </ButtonContainer>
      </FormWrapper>
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
  changeRecipesFilter
)(FilterMobileForm);
