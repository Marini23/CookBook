import arrowUp from '../../images/arrow_up_icon.svg';
import arrowDown from '../../images/arrow_down-icon.svg';
import { ArrowIcon, BtnFilter, TextButtonFilter } from './ButtonFilter.styled';

export const ButtonFilter = ({ isFilterVisible, toggleFilterVisibility }) => {
  return (
    <BtnFilter type="button" onClick={toggleFilterVisibility}>
      <ArrowIcon
        src={isFilterVisible ? arrowUp : arrowDown}
        alt="Toggle Filters Icon"
      />
      <TextButtonFilter>
        {isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
      </TextButtonFilter>
    </BtnFilter>
  );
};
