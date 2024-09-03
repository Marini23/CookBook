import { useForm } from 'react-hook-form';
import searchIcon from '../../images/search_icon.svg';
import { Button, Input, SearchForm } from './SearchBar.styled';
import { useDispatch } from 'react-redux';
import { changeQuery } from '../../redux/recipesSlice/recipesSlice';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      query: '',
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = data => {
    dispatch(changeQuery(data.query));
    navigate('/recipes');
    reset();
  };

  return (
    <SearchForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('query')}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="I'am searching..."
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
