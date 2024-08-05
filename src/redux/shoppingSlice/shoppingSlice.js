import { createSlice } from '@reduxjs/toolkit';
import {
  addRecipeItem,
  deleteRecipeItem,
  getShoppingList,
} from './shoppingOperations';

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
      .addCase(getShoppingList.pending, handlePending)
      .addCase(getShoppingList.rejected, handleRejected)
      .addCase(getShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.addedRecipestoShoppingList = action.payload;
      })
      .addCase(addRecipeItem.pending, handlePending)
      .addCase(addRecipeItem.rejected, handleRejected)
      .addCase(addRecipeItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.addedRecipestoShoppingList.push(action.payload);
      })
      .addCase(deleteRecipeItem.pending, handlePending)
      .addCase(deleteRecipeItem.rejected, handleRejected)
      .addCase(deleteRecipeItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload);
        const index = state.addedRecipestoShoppingList.findIndex(item => {
          console.log(item.id);
          return item.id === action.payload;
        });
        console.log(state.addedRecipestoShoppingList);
        console.log(index);
        state.addedRecipestoShoppingList.splice(index, 1);
      }),
});
// export const { addFavoriteRecipe, deleteFavorites } = shoppingSlice.actions;

export const shoppingReducer = shoppingSlice.reducer;
