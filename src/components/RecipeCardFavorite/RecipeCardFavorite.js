import { useEffect, useRef, useState } from 'react';
import {
  HeartIcon,
  HeartImageFavorite,
  Img,
  Label,
  ListItem,
  StyledLinkList,
} from './RecipeCardFavorite.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFavoritesRecipes,
  selectFilteredRecipes,
  selectUserId,
} from '../../redux/selectors';

import {
  addFavoriteItem,
  deleteFavoriteItem,
} from '../../redux/favoritesSlice/favoritesOperations';
import { useLocation } from 'react-router-dom';
import { truncateString } from 'utils';
import heart from '../../images/flagHeart.svg';
import heartFavorite from '../../images/flagHeartFavorite.svg';
import { DefaultImageFavorite } from 'components/DefaultImageFavorite/DefaultImageFavorite';
import { HeartImage } from 'components/RecipeCard/RecipeCard.styled';

export const RecipeCardFavorite = recipe => {
  const [truncatedLabel, setTruncatedLabel] = useState(
    recipe.recipe.recipe.label.toUpperCase()
  );
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const filteredRecipes = useSelector(selectFilteredRecipes);
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  const userId = useSelector(selectUserId);
  const labelRef = useRef();

  useEffect(() => {}, [favoritesRecipes]);

  const isFavorite = favoritesRecipes.some(favItem => {
    return favItem._links.self.href === recipe.recipe._links.self.href;
  });

  useEffect(() => {
    if (labelRef.current) {
      const containerWidth = labelRef.current.clientWidth - 16; // 16 = padding left + right 8x2
      const fontSize = window.getComputedStyle(labelRef.current).fontSize;
      const fontFamily = window.getComputedStyle(labelRef.current).fontFamily;
      const font = `${fontSize} ${fontFamily}`;

      const truncatedText = truncateString(
        recipe.recipe.recipe.label.toUpperCase(),
        containerWidth,
        font
      );
      setTruncatedLabel(truncatedText);
    }
  }, [recipe]);

  const url = recipe.recipe._links.self.href;

  const getRecipeIdFromUrl = url => {
    const urlObj = new URL(url);
    const pathSegments = urlObj.pathname.split('/');
    const recipeId = pathSegments[pathSegments.length - 1];
    return recipeId;
  };

  const recipeId = getRecipeIdFromUrl(url);

  const toggleFavorite = () => {
    const selectRecipe = filteredRecipes.find(item => {
      return item._links.self.href === recipe.recipe._links.self.href;
    });
    if (isFavorite) {
      const recipeId = favoritesRecipes.find(item => {
        return item._links.self.href === recipe.recipe._links.self.href;
      }).recipe.id;
      console.log(recipeId);
      // delete favorite
      dispatch(deleteFavoriteItem({ userId, recipeId }));
    } else {
      //  add favorite
      dispatch(addFavoriteItem({ userId, favoriteData: selectRecipe }));
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <ListItem>
        <StyledLinkList to={`/recipes/${recipeId}`} state={{ from: location }}>
          {imageError ? (
            <DefaultImageFavorite />
          ) : (
            <Img
              src={recipe.recipe.recipe.image}
              alt={recipe.recipe.recipe.label}
              onError={handleImageError}
            />
          )}
          <Label ref={labelRef}>{truncatedLabel}</Label>
        </StyledLinkList>
        <HeartIcon>
          {isFavorite ? (
            <HeartImageFavorite
              src={heartFavorite}
              alt="heart icon favorite"
              onClick={toggleFavorite}
            />
          ) : (
            <HeartImage src={heart} alt="heart icon" onClick={toggleFavorite} />
          )}

          {/* {isFavorite ? (
            <StyledHeartIconFavorite
              onClick={toggleFavorite}
              // onTouchStart={toggleFavorite}
            />
          ) : (
            <StyledHeartIcon
              onClick={toggleFavorite}
              // onTouchStart={toggleFavorite}
            />
          )} */}
        </HeartIcon>
      </ListItem>
    </>
  );
};
