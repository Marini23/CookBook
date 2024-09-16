import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: `filter`,
  initialState: {
    recipes: {
      caloriesFrom: null,
      caloriesTo: null,
      ingredients: null,
      diet: [],
      allergies: null,
    },
    favorites: {
      caloriesFrom: null,
      caloriesTo: null,
      ingredients: null,
      diet: [],
      allergies: null,
    },
  },

  reducers: {
    changeRecipesFilter(state, action) {
      state.recipes = { ...state.recipes, ...action.payload };
    },
    changeFavoritesFilter(state, action) {
      state.favorites = { ...state.favorites, ...action.payload };
    },
    resetRecipesFilter(state) {
      state.recipes = {
        caloriesFrom: null,
        caloriesTo: null,
        ingredients: null,
        diet: [],
        allergies: null,
      };
    },
    resetFavoritesFilter(state) {
      state.favorites = {
        caloriesFrom: null,
        caloriesTo: null,
        ingredients: null,
        diet: [],
        allergies: null,
      };
    },
  },
});

export const {
  changeRecipesFilter,
  changeFavoritesFilter,
  resetRecipesFilter,
  resetFavoritesFilter,
} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
