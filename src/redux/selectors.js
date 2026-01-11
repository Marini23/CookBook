import { createSelector } from '@reduxjs/toolkit';
import { getFirstName } from 'utils';

export const selectUser = state => state.auth.user;

export const selectUserId = state => state.auth.user.id;

export const selectUserName = state => state.auth.user.name;

export const selectErrorAuth = state => state.auth.error;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectResipes = state => state.recipes.recipesList;

export const selectIsLoadingRecipes = state => state.recipes.isLoading;

export const selectIsLoadingFavorites = state => state.favorites.isLoading;

export const selectIsLoadingShoppingList = state =>
  state.shoppingList.isLoading;

export const selectErrorRecipes = state => state.recipes.error;

export const selectErrorShoppingList = state => state.shoppingList.error;

export const selectNextPageLink = state => state.recipes.nextPageLink;

export const selectTotalHits = state => state.recipes.totalHits;

export const selectQuery = state => state.recipes.query;

export const selectRecipesFilters = state => state.filter.recipes;

export const selectFavoritesFilters = state => state.filter.favorites;

export const selectFavoritesRecipes = state => state.favorites.favoritesList;

export const selectRecipesInShoppingList = state =>
  state.shoppingList.addedRecipestoShoppingList;

export const selectIngredientsInShoppingList = state =>
  state.shoppingList.ingredientsList;

export const selectUserFirstName = createSelector([selectUser], user =>
  getFirstName(user.name)
);

export const selectUserPhoto = createSelector([selectUser], user => {
  // Access `providerData` safely and get `photoURL` from the first element
  return user.providerData?.[0]?.photoURL || null; // Fallback to `null` if not found
});

//
export const selectFilteredRecipes = createSelector(
  [selectResipes, selectRecipesFilters],
  (recipes, filters) => {
    if (!recipes) return []; // Early return if no recipes

    return recipes.filter(recipe => {
      const { caloriesFrom, caloriesTo, ingredientsTo, diet, allergies } =
        filters;

      // Filter by calories range
      const withinCaloriesFrom = caloriesFrom
        ? recipe.recipe.calories >= caloriesFrom
        : true;
      const withinCaloriesTo = caloriesTo
        ? recipe.recipe.calories <= caloriesTo
        : true;

      // Filter by ingredients count
      const hasRequiredIngredients = ingredientsTo
        ? recipe.recipe.ingredients.length >= ingredientsTo
        : true;

      // Filter by diet labels
      const matchesDiet =
        diet && diet.length > 0
          ? diet.every(dietItem => recipe.recipe.dietLabels.includes(dietItem))
          : true;

      // Filter by allergies (health labels)
      const matchesAllergies =
        allergies && allergies.length > 0
          ? allergies.every(allergyItem =>
              recipe.recipe.healthLabels.includes(allergyItem)
            )
          : true;

      // Return true if all filter conditions are met
      return (
        withinCaloriesFrom &&
        withinCaloriesTo &&
        hasRequiredIngredients &&
        matchesDiet &&
        matchesAllergies
      );
    });
  }
);

export const selectFilteredFavorites = createSelector(
  [selectFavoritesRecipes, selectFavoritesFilters],
  (recipes, filters) => {
    if (!recipes) return []; // Early return if no recipes

    return recipes.filter(recipe => {
      const { caloriesFrom, caloriesTo, ingredientsTo, diet, allergies } =
        filters;

      // Filter by calories range
      const withinCaloriesFrom = caloriesFrom
        ? recipe.recipe.calories >= caloriesFrom
        : true;
      const withinCaloriesTo = caloriesTo
        ? recipe.recipe.calories <= caloriesTo
        : true;

      // Filter by ingredients count
      const hasRequiredIngredients = ingredientsTo
        ? recipe.recipe.ingredients.length >= ingredientsTo
        : true;

      // Filter by diet labels
      const matchesDiet =
        diet && diet.length > 0
          ? diet.every(dietItem => recipe.recipe.dietLabels.includes(dietItem))
          : true;

      // Filter by allergies (health labels)
      const matchesAllergies =
        allergies && allergies.length > 0
          ? allergies.every(allergyItem => {
              console.log(allergyItem);
              console.log(recipe);
              return recipe.recipe.healthLabels.includes(allergyItem);
            })
          : true;

      // Return true if all filter conditions are met
      return (
        withinCaloriesFrom &&
        withinCaloriesTo &&
        hasRequiredIngredients &&
        matchesDiet &&
        matchesAllergies
      );
    });
  }
);
