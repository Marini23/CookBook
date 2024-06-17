import {
  HeartIcon,
  Img,
  Label,
  ListItem,
  StyledHeartIcon,
} from './RecipeCard.styled';

export const RecipeCard = recipe => {
  return (
    <>
      <ListItem>
        <Img
          src={recipe.recipe.recipe.image}
          alt={recipe.recipe.recipe.label}
          width={366}
          height={220}
        />
        <Label>{recipe.recipe.recipe.label.toUpperCase()}</Label>
        <HeartIcon>
          <StyledHeartIcon />
        </HeartIcon>
      </ListItem>
    </>
  );
};
