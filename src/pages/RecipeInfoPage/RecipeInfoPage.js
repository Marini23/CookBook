import { useParams } from 'react-router-dom';
import { Container } from './RecipeInfoPage.styled';
import { useEffect, useState } from 'react';
import { getRecipeInfo } from '../../redux/recipesSlice/recipesOperations';
import { RecipeInfo } from 'components/RecipeInfo/RecipeInfo';
import { Loader } from 'components/Loader/Loader';

export const RecipeInfoPage = () => {
  const { recipeId } = useParams();
  const [recipeInfo, setRecipeInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeInfo = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getRecipeInfo(recipeId);
        setRecipeInfo(data);
      } catch (error) {
        console.error('Error fetching recipe info:', error);
        setError('Failed to load recipe information');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipeInfo();
  }, [recipeId]);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {recipeInfo && <RecipeInfo recipeInfo={recipeInfo} />}
    </Container>
  );
};
