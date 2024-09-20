import { useSelector } from 'react-redux';
import {
  selectFilteredRecipes,
  selectQuery,
  selectTotalHits,
} from '../../redux/selectors';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';
import { Container, List, Title, TitleAfterSearch } from './RecipesList.styled';

export const RecipesList = () => {
  const totalHits = useSelector(selectTotalHits);
  const query = useSelector(selectQuery);
  const filteredRecipes = useSelector(selectFilteredRecipes);

  const isPopular = query === `popular`;

  return (
    <Container>
      {isPopular ? (
        <Title>POPULAR RECIPES</Title>
      ) : (
        <TitleAfterSearch>
          {' '}
          {totalHits} RESULTS FOR {query.toUpperCase()}{' '}
        </TitleAfterSearch>
      )}
      <List>
        {filteredRecipes.map(recipe => {
          return <RecipeCard recipe={recipe} key={recipe._links.self.href} />;
        })}
      </List>
    </Container>
  );
};
