import { useParams } from 'react-router-dom';
import { Container } from './RecipeInfoPage.styled';
import { useEffect, useState } from 'react';
import { getRecipeInfo } from '../../redux/recipesSlice/recipesOperations';
import { RecipeInfo } from 'components/RecipeInfo/RecipeInfo';
import { Footer } from 'components/Footer/Footer';

export const RecipeInfoPage = () => {
  const { recipeId } = useParams();
  const [recipeInfo, setRecipeInfo] = useState(``);

  useEffect(() => {
    getRecipeInfo(recipeId)
      .then(data => {
        setRecipeInfo(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [recipeId]);

  useEffect(() => {}, [recipeInfo]);

  return (
    <Container>
      {' '}
      {recipeInfo && <RecipeInfo recipeInfo={recipeInfo} />}
      <Footer />
    </Container>
  );
};
