import { useEffect, useRef, useState } from 'react';
import {
  HeartIcon,
  Img,
  Label,
  ListItem,
  StyledHeartIcon,
  StyledHeartIconFavorite,
  StyledLinkList,
} from './RecipeCard.styled';
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

export const RecipeCard = recipe => {
  const [truncatedLabel, setTruncatedLabel] = useState(
    recipe.recipe.recipe.label.toUpperCase()
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const filteredRecipes = useSelector(selectFilteredRecipes);
  const favoritesRecipes = useSelector(selectFavoritesRecipes);
  const userId = useSelector(selectUserId);
  const labelRef = useRef();
  console.log(recipe);

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

  return (
    <>
      <ListItem>
        <StyledLinkList to={`/recipes/${recipeId}`} state={{ from: location }}>
          {/* <Img>
            <source
              srcSet={recipe.recipe.recipe.images.THUMBNAIL}
              media="(max-width: 743px)"
            />
            <source
              srcSet={recipe.recipe.recipe.images.SMALL}
              media="(min-width: 744px) and (max-width: 1439px)"
            />
            <source
              srcSet={recipe.recipe.recipe.images.LARGE}
              media="(min-width: 1440px)"
            />
            <img
              src={recipe.recipe.recipe.image}
              alt={recipe.recipe.recipe.label}
            />
          </Img> */}
          <Img
            src={recipe.recipe.recipe.image}
            alt={recipe.recipe.recipe.label}
          />

          <Label ref={labelRef}>{truncatedLabel}</Label>
        </StyledLinkList>
        <HeartIcon>
          {isFavorite ? (
            <StyledHeartIconFavorite
              onClick={toggleFavorite}
              // onTouchStart={toggleFavorite}
            />
          ) : (
            <StyledHeartIcon
              onClick={toggleFavorite}
              // onTouchStart={toggleFavorite}
            />
          )}
        </HeartIcon>
      </ListItem>
    </>
  );
};
