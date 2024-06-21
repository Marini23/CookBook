import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { changeFilter, resetFilter } from '../../redux/filterSlice';
import {
  ClearButton,
  ClearIcon,
  FormFilter,
  InputNumber,
  Label,
  Span,
  WrapFilter,
  WrapItem,
} from './Filter.styled';
import clearIcon from '../../images/clear_filter_icon.svg';

export const Filter = ({ isClose }) => {
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
      <ClearButton type="button" onClick={clearFilters}>
        {' '}
        <ClearIcon src={clearIcon} alt="Clear Filters Icon" />
        CLEAR FILTERS
      </ClearButton>
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
    </FormFilter>
  );
};
