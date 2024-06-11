import { Img } from './RecipeCard.styled';

export const RecipeCard = recipe => {
  //   console.log(recipe.recipe._links.self.href);
  return (
    <>
      <li>
        <Img
          src={recipe.recipe.recipe.image}
          alt={recipe.recipe.recipe.label}
          width={366}
          height={220}
        />
        <h5>{recipe.recipe.recipe.label}</h5>
      </li>
    </>
  );
};
