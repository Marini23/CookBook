import { useSelector } from 'react-redux';
import {
  selectFilteredRecipes,
  selectQuery,
  selectTotalHits,
} from '../../redux/selectors';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';
import { Container, List, Title } from './RecipesList.styled';

export const RecipesList = () => {
  // const recipes = useSelector(selectResipes);
  const totalHits = useSelector(selectTotalHits);
  const query = useSelector(selectQuery);
  const filteredRecipes = useSelector(selectFilteredRecipes);
  console.log(filteredRecipes);

  const isPopular = query === `popular`;

  return (
    <Container>
      {isPopular ? (
        <Title>POPULAR RECIPES</Title>
      ) : (
        <Title>
          {' '}
          {totalHits} RESULTS FOR {query.toUpperCase()}{' '}
        </Title>
      )}
      <List>
        {filteredRecipes.map(recipe => {
          return <RecipeCard recipe={recipe} key={recipe._links.self.href} />;
        })}
      </List>
    </Container>
  );
};
