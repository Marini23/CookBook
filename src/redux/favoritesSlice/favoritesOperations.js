import { db } from '../../firebase';
import { onValue, push, ref, remove, set } from 'firebase/database';
// import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

const addFavorite = (userId, favoriteData) => {
  return new Promise((resolve, reject) => {
    console.log('add favorite');
    const favoritesRef = ref(db, 'favorites/' + userId);
    const newFavoriteRef = push(favoritesRef);
    console.log(favoriteData);

    set(newFavoriteRef, {
      id: newFavoriteRef.key,
      label: favoriteData.recipe.label,
      image: favoriteData.recipe.image,
      calories: favoriteData.recipe.calories,
      ingredientLines: favoriteData.recipe.ingredientLines,
      ingredients: favoriteData.recipe.ingredients,
      totalTime: favoriteData.recipe.totalTime,
      url: favoriteData.recipe.url,
      yield: favoriteData.recipe.yield,
      href: favoriteData._links.self.href,
    })
      .then(() => {
        console.log('Favorite added successfully with ID:', newFavoriteRef.key);
        resolve({
          id: newFavoriteRef.key,
          label: favoriteData.recipe.label,
          image: favoriteData.recipe.image,
          calories: favoriteData.recipe.calories,
          ingredientLines: favoriteData.recipe.ingredientLines,
          ingredients: favoriteData.recipe.ingredients,
          totalTime: favoriteData.recipe.totalTime,
          url: favoriteData.recipe.url,
          yield: favoriteData.recipe.yield,
          href: favoriteData._links.self.href,
        });
      })
      .catch(error => {
        console.error('Error adding favorite:', error);
        reject(error);
      });
  });
};

const deleteFavorite = (userId, recipeId) => {
  return new Promise((resolve, reject) => {
    const favoriteRef = ref(db, `favorites/${userId}/${recipeId}`);
    remove(favoriteRef)
      .then(() => {
        console.log(`Favorite with href ${recipeId} deleted successfully`);
        resolve(recipeId);
      })
      .catch(error => {
        console.error('Error deleting favorite:', error);
        reject(error);
      });
  });
};

const getFavorites = userId => {
  return new Promise((resolve, reject) => {
    const favoritesRef = ref(db, `favorites/${userId}`);
    onValue(
      favoritesRef,
      snapshot => {
        if (snapshot.exists()) {
          const favorites = snapshot.val();
          const favoritesArray = Object.values(favorites);
          resolve(favoritesArray);
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

export const getFavoritesList = createAsyncThunk(
  'favorites/getFavorites',
  async (userId, thunkAPI) => {
    try {
      const favorites = getFavorites(userId);
      return favorites;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

export const addFavoriteItem = createAsyncThunk(
  'favorites/addFavorite',
  async ({ userId, favoriteData }, thunkAPI) => {
    try {
      const favorite = addFavorite(userId, favoriteData);
      return favorite;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

export const deleteFavoriteItem = createAsyncThunk(
  'favorites/deleteFavorite',
  async ({ userId, recipeId }, thunkAPI) => {
    try {
      const deletedFavoriteKey = await deleteFavorite(userId, recipeId);
      console.log(`Deleted favorite key: ${deletedFavoriteKey}`);
      return deletedFavoriteKey;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);
