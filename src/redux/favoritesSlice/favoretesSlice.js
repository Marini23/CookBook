import { createSlice } from '@reduxjs/toolkit';

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

  // extraReducers: builder =>
  //   builder
  //     .addCase(addFavorite.pending, handlePending)
  //     .addCase(addFavorite.rejected, handleRejected)
  //     .addCase(addFavorite.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.favoritesList.push(action.payload);
  //     })
  //     .addCase(addFavoriteTest.rejected, handleRejected)
  //     .addCase(addFavoriteTest.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.favoritesList.push(action.payload);
  //     }),
});
export const { addFavoriteRecipe, deleteFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
