import searchIcon from '../../images/search_icon.svg';
import { Button, Input, SearchForm } from './SearchBar.styled';

export const SearchBar = () => {
  return (
    <SearchForm>
      <Input
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
