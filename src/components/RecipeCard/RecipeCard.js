import { Img, Label, ListItem } from './RecipeCard.styled';

export const RecipeCard = recipe => {
  //   console.log(recipe.recipe._links.self.href);
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
      </ListItem>
    </>
  );
};
