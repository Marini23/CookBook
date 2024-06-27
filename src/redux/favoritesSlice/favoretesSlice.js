import { createSlice } from '@reduxjs/toolkit';
import {
  addFavoriteItem,
  deleteFavoriteItem,
  getFavoritesList,
} from './favoritesOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoritesList: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // addFavoriteRecipe(state, action) {
    //   state.favoritesList.push(action.payload);
    // },
    deleteFavorites(state, action) {
      const index = state.favoritesList.findIndex(
        item => item.id === action.payload.id
      );
      state.favoritesList.splice(index, 1);
    },
    clearFavorites(state, action) {
      state.favoritesList = [];
    },
  },

  extraReducers: builder =>
    builder
      .addCase(getFavoritesList.pending, handlePending)
      .addCase(getFavoritesList.rejected, handleRejected)
      .addCase(getFavoritesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favoritesList = action.payload;
      })
      .addCase(addFavoriteItem.pending, handlePending)
      .addCase(addFavoriteItem.rejected, handleRejected)
      .addCase(addFavoriteItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload);
        state.favoritesList.push(action.payload);
      })
      .addCase(deleteFavoriteItem.pending, handlePending)
      .addCase(deleteFavoriteItem.rejected, handleRejected)
      .addCase(deleteFavoriteItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload);
        const index = state.favoritesList.findIndex(
          item => item.id === action.payload.id
        );
        state.favoritesList.splice(index, 1);
      }),
});
export const { addFavoriteRecipe, deleteFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
