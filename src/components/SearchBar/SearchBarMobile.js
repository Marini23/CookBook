import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect, useDispatch } from 'react-redux';
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
import { changeQuery } from '../../redux/recipesSlice/recipesSlice';

export const SearchBarMobile = () => {
  const [modalIsOpenFilter, setModalIsOpenFilter] = useState(false);

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

  const openModalFilter = () => {
    setModalIsOpenFilter(true);
  };

  const closeModalFilter = () => {
    setModalIsOpenFilter(false);
  };
  return (
    <>
      <SearchFormMobile onSubmit={handleSubmit(onSubmit)}>
        <Label>
          <img src={searchIcon} alt="filter icon" />
          <InputMobile
            {...register('query')}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="I'am searching..."
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

// Map Redux state to component props
const mapStateToProps = state => ({
  query: state.recipes.query,
});

// Connect your component to Redux
export default connect(mapStateToProps, { changeQuery })(SearchBarMobile);
