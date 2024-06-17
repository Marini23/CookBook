import { useDispatch, useSelector } from 'react-redux';
import { Button } from './loadMoreButton.styled';
import { selectNextPageLink } from '../../redux/selectors';
import { loadMoreRecipes } from '../../redux/recipesSlice/recipesOperations';

export const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const nextPageLink = useSelector(selectNextPageLink);

  const handleLoadMore = () => {
    console.log('next page');
    dispatch(loadMoreRecipes(nextPageLink));
  };
  return (
    <Button type="button" onClick={handleLoadMore}>
      Show More Results
    </Button>
  );
};
