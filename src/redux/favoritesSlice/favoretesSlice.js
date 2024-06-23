import { createSlice } from '@reduxjs/toolkit';
import { addFavorite } from './favoritesOperations';

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
    // changeQuery(state, action) {
    //   state.query = action.payload;
    // },
  },

  extraReducers: builder =>
    builder
      .addCase(addFavorite.pending, handlePending)
      .addCase(addFavorite.rejected, handleRejected)
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      }),
});
// export const { changeQuery } = recipesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
