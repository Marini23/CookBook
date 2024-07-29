import { createSlice } from '@reduxjs/toolkit';
import { addRecipeItem } from './shoppingOperations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const shoppingSlice = createSlice({
  name: 'shoppingList',
  initialState: {
    addedRecipestoShoppingList: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // addFavoriteRecipe(state, action) {
    //   state.favoritesList.push(action.payload);
    // },
    // deleteFavorites(state, action) {
    //   const index = state.favoritesList.findIndex(
    //     item => item.id === action.payload.id
    //   );
    //   state.favoritesList.splice(index, 1);
    // },
    // clearFavorites(state, action) {
    //   state.favoritesList = [];
    // },
  },

  extraReducers: builder =>
    builder
      // .addCase(getFavoritesList.pending, handlePending)
      // .addCase(getFavoritesList.rejected, handleRejected)
      // .addCase(getFavoritesList.fulfilled, (state, action) => {
      //   state.isLoading = false;
      //   state.error = null;
      //   state.favoritesList = action.payload;
      // })
      .addCase(addRecipeItem.pending, handlePending)
      .addCase(addRecipeItem.rejected, handleRejected)
      .addCase(addRecipeItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // console.log(action.payload);
        // state.photoRecipes = action.payload.recipe.images;
        // state.ingredients = action.payload.recipe.ingredients;
        state.addedRecipestoShoppingList.push(action.payload);
        // state.favoritesList.push(action.payload);
      }),
  // .addCase(deleteFavoriteItem.pending, handlePending)
  // .addCase(deleteFavoriteItem.rejected, handleRejected)
  // .addCase(deleteFavoriteItem.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.error = null;
  //   console.log(action.payload);
  //   const index = state.favoritesList.findIndex(
  //     item => item.id === action.payload
  //   );
  //   state.favoritesList.splice(index, 1);
  // }),
});
// export const { addFavoriteRecipe, deleteFavorites } = shoppingSlice.actions;

export const shoppingReducer = shoppingSlice.reducer;
