import { useSelector } from 'react-redux';
import { selectResipes } from '../../redux/selectors';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';
import { Container, List, Title } from './RecipesList.styled';

export const RecipesList = () => {
  const recipes = useSelector(selectResipes);

  return (
    <Container>
      <Title>POPULAR RECIPES</Title>
      <List>
        {recipes.map(recipe => {
          return <RecipeCard recipe={recipe} key={recipe._links.self.href} />;
        })}
      </List>
    </Container>
  );
};
