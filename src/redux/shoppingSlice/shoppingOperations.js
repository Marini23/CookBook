import { db } from '../../firebase';
import { push, ref, set } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';

const addRecipeToShoppingList = (userId, recipeData) => {
  return new Promise((resolve, reject) => {
    const shoppingRef = ref(db, 'shopping/' + userId);
    const newShoppingRef = push(shoppingRef);

    set(newShoppingRef, {
      id: newShoppingRef.key,
      label: recipeData.recipe.label,
      images: recipeData.recipe.images,
      ingredients: recipeData.recipe.ingredients,
      idLink: recipeData._links.self.href,
    })
      .then(() => {
        resolve({
          id: newShoppingRef.key,
          label: recipeData.recipe.label,
          images: recipeData.recipe.images,
          ingredients: recipeData.recipe.ingredients,
          idLink: recipeData._links.self.href,
        });
      })
      .catch(error => {
        console.error('Error adding recipe:', error);
        reject(error);
      });
  });
};

export const addRecipeItem = createAsyncThunk(
  'shopping/addRecipe',
  async ({ userId, recipeInfo }, thunkAPI) => {
    try {
      console.log('add');
      console.log(recipeInfo);
      const shoppingListItem = addRecipeToShoppingList(userId, recipeInfo);
      return shoppingListItem;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);
