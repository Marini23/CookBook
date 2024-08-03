import { db } from '../../firebase';
import { onValue, push, ref, set } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getRecipesInShoppingList = userId => {
  return new Promise((resolve, reject) => {
    const recipesRef = ref(db, `shopping/${userId}`);
    onValue(
      recipesRef,
      snapshot => {
        if (snapshot.exists()) {
          const recipes = snapshot.val();
          const recipesArray = Object.values(recipes);
          resolve(recipesArray);
        } else {
          console.log('No data available');
          resolve([]);
        }
      },
      error => {
        reject(error);
      }
    );
  });
};

export const getShoppingList = createAsyncThunk(
  'shopping/getShoppingList',
  async (userId, thunkAPI) => {
    try {
      const recipesList = getRecipesInShoppingList(userId);
      return recipesList;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

const addRecipeToShoppingList = (userId, recipeData) => {
  return new Promise((resolve, reject) => {
    const shoppingRef = ref(db, 'shopping/' + userId);
    const newShoppingRef = push(shoppingRef);

    set(newShoppingRef, {
      id: newShoppingRef.key,
      label: recipeData.recipe.label,
      image: recipeData.recipe.image,
      images: recipeData.recipe.images,
      ingredients: recipeData.recipe.ingredients,
      idLink: recipeData._links.self.href,
    })
      .then(() => {
        resolve({
          id: newShoppingRef.key,
          image: recipeData.recipe.image,
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
