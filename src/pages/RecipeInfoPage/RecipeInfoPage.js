import { useParams } from 'react-router-dom';
import { Container } from './RecipeInfoPage.styled';
import { useEffect, useState } from 'react';
import { getRecipeInfo } from '../../redux/recipesSlice/recipesOperations';

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
  console.log(recipeInfo);
  return <Container>Recipe info</Container>;
};
