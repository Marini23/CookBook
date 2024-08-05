import { db } from '../../firebase';
import { onValue, push, ref, remove, set } from 'firebase/database';
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

const deleteRecipeFromShoppingList = (userId, recipeId) => {
  return new Promise((resolve, reject) => {
    const recipeRef = ref(db, `shopping/${userId}/${recipeId}`);
    remove(recipeRef)
      .then(() => {
        console.log(`Recipe with href ${recipeId} deleted successfully`);
        resolve(recipeId);
      })
      .catch(error => {
        console.error('Error deleting recipe:', error);
        reject(error);
      });
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

export const deleteRecipeItem = createAsyncThunk(
  'shopping/deleteRecipe',
  async ({ userId, recipeId }, thunkAPI) => {
    try {
      console.log(recipeId);
      const deletedRecipe = await deleteRecipeFromShoppingList(
        userId,
        recipeId
      );
      console.log(`Deleted recipe: ${deletedRecipe}`);
      return deletedRecipe;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);
