import { createSlice } from '@reduxjs/toolkit';
import {
  getRecipesList,
  getRecipesListByQuery,
  loadMoreRecipes,
} from './recipesOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    recipesList: [],
    nextPageLink: null,
    totalHits: null,
    isLoading: false,
    error: null,
    query: 'popular',
  },
  reducers: {
    changeQuery(state, action) {
      state.query = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(getRecipesList.pending, handlePending)
      .addCase(getRecipesList.rejected, handleRejected)
      .addCase(getRecipesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipesList = action.payload.hits;
        state.totalHits = action.payload.count;
        state.nextPageLink = action.payload._links.next?.href || null;
      })
      .addCase(getRecipesListByQuery.pending, handlePending)
      .addCase(getRecipesListByQuery.rejected, handleRejected)
      .addCase(getRecipesListByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipesList = action.payload.hits;
        state.totalHits = action.payload.count;
        state.nextPageLink = action.payload._links.next?.href || null;
      })
      .addCase(loadMoreRecipes.pending, handlePending)
      .addCase(loadMoreRecipes.rejected, handleRejected)
      .addCase(loadMoreRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipesList = [...state.recipesList, ...action.payload.hits];
        state.nextPageLink = action.payload._links.next.href;
      }),
});
export const { changeQuery } = recipesSlice.actions;

export const recipesReducer = recipesSlice.reducer;
