import { useForm } from 'react-hook-form';
import searchIcon from '../../images/search_icon.svg';
import { Button, Input, SearchForm } from './SearchBar.styled';
import { useDispatch } from 'react-redux';
import { changeQuery } from '../../redux/recipesSlice/recipesSlice';

export const SearchBar = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      query: '',
    },
  });

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(changeQuery(data.query));
    reset();
  };

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('query')}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="I'am craving..."
        name="query"
      />
      <Button type="submit">
        <span>
          <img src={searchIcon} alt="serch icon" />
        </span>
      </Button>
    </SearchForm>
  );
};
