import { createSlice } from '@reduxjs/toolkit';
import { getRecipesList } from './recipesOperations';

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
      }),
});
export const { changePage } = recipesSlice.actions;

export const recipesReducer = recipesSlice.reducer;
