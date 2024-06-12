import searchIcon from '../../images/icon_search_mobile.svg';
import filterIcon from '../../images/mage_filter-square-fill.svg';
import {
  ButtonMobile,
  FilterIcon,
  InputMobile,
  Label,
  SearchFormMobile,
} from './SearchBarMobile.styled';

export const SearchBarMobile = () => {
  return (
    <SearchFormMobile>
      <Label>
        <img src={searchIcon} alt="filter icon" />
        <InputMobile
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="I'am craving..."
          name="query"
        />

        <ButtonMobile type="button">
          <span>
            <FilterIcon src={filterIcon} alt="filter icon" />
          </span>
        </ButtonMobile>
      </Label>
    </SearchFormMobile>
  );
};
