import { createSlice } from '@reduxjs/toolkit';
import { getRecipesList, loadMoreRecipes } from './recipesOperations';

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
    currentPage: 1,
    nextPageLink: null,
    totalHits: null,
    isLoading: false,
    error: null,
    query: 'popular',
  },
  reducers: {
    changePage(state) {
      state.currentPage += 1;
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
        state.nextPageLink = action.payload._links.next.href;
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
export const { changePage } = recipesSlice.actions;

export const recipesReducer = recipesSlice.reducer;
