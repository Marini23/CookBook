import { useParams } from 'react-router-dom';
import { Container } from './RecipeInfoPage.styled';
import { useEffect, useState } from 'react';
import { getRecipeInfo } from '../../redux/recipesSlice/recipesOperations';
import { RecipeInfo } from 'components/RecipeInfo/RecipeInfo';

export const RecipeInfoPage = () => {
  const { recipeId } = useParams();
  const [recipeInfo, setRecipeInfo] = useState(``);

  useEffect(() => {
    getRecipeInfo(recipeId)
      .then(data => {
        console.log('Recipe data:', data);
        setRecipeInfo(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [recipeId]);

  useEffect(() => {
    console.log('Updated recipeInfo:', recipeInfo);
  }, [recipeInfo]);

  console.log(recipeInfo);
  return (
    <Container>
      {' '}
      {recipeInfo && <RecipeInfo recipeInfo={recipeInfo} />}
    </Container>
  );
};
