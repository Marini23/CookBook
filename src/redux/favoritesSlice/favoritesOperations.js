import { db } from '../../firebase';
import { ref, remove, set } from 'firebase/database';
// import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const writeFavoriteRecipe = selectedRecipe => {
  console.log(selectedRecipe);
  const recipeId = selectedRecipe.recipe._links.href;
  set(ref(db, 'favoritesRecipes/' + recipeId), {
    // username: user.displayName,
    // email: user.email,
    // providerData: user.providerData,
  })
    .then(() => {
      console.log('Data written successfully.');
    })
    .catch(error => {
      console.error('Error writing data:', error);
    });
};

export const removeFavoriteRecipe = selectedRecipe => {
  console.log(selectedRecipe);
  const recipeId = selectedRecipe.recipe._links.href;
  remove(ref(db, 'favoritesRecipes/' + recipeId), {
    // username: user.displayName,
    // email: user.email,
    // providerData: user.providerData,
  })
    .then(() => {
      console.log('Data deleted successfully.');
    })
    .catch(error => {
      console.error('Error writing data:', error);
    });
};

export const addFavorite = createAsyncThunk(
  'auth/register',
  async (selectedRecipe, thunkAPI) => {
    try {
      writeFavoriteRecipe(selectedRecipe);
      console.log(selectedRecipe);
      //   const serializedRecipe = {
      //     name: user.displayName,
      //     email: user.email,
      //     providerData: user.providerData,
      //     accessToken: user.stsTokenManager.accessToken,
      //   };
      //   return serializedRecipe;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);
