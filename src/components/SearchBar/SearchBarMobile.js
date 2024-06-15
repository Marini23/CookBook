import { useState } from 'react';
import searchIcon from '../../images/icon_search_mobile.svg';
import filterIcon from '../../images/mage_filter-square-fill.svg';
import {
  ButtonMobile,
  FilterIcon,
  InputMobile,
  Label,
  SearchFormMobile,
} from './SearchBarMobile.styled';
import { ModalFilterMobile } from 'components/ModalFilterMobile/ModalFilterMobile';
import { FilterMobileForm } from 'components/Filter/FilterMobile';

export const SearchBarMobile = () => {
  const [modalIsOpenFilter, setModalIsOpenFilter] = useState(false);

  const openModalFilter = () => {
    setModalIsOpenFilter(true);
  };

  const closeModalFilter = () => {
    setModalIsOpenFilter(false);
  };
  return (
    <>
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
          <ButtonMobile type="button" onClick={openModalFilter}>
            <span>
              <FilterIcon src={filterIcon} alt="filter icon" />
            </span>
          </ButtonMobile>
        </Label>
      </SearchFormMobile>
      <ModalFilterMobile isClose={closeModalFilter} isOpen={modalIsOpenFilter}>
        <FilterMobileForm isClose={closeModalFilter} />
      </ModalFilterMobile>
    </>
  );
};
