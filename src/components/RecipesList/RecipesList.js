import { useSelector } from 'react-redux';
import { selectResipes } from '../../redux/selectors';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';
import { List } from './RecipesList.styled';

export const RecipesList = () => {
  const recipes = useSelector(selectResipes);

  return (
    <>
      <h3>POPULAR RECIPES</h3>
      <List>
        {recipes.map(recipe => {
          return <RecipeCard recipe={recipe} key={recipe._links.self.href} />;
        })}
      </List>
    </>
  );
};
