import { createSlice } from '@reduxjs/toolkit';
import {
  addIngredients,
  addRecipeItem,
  deleteRecipeItem,
  getShoppingListIngredients,
  getShoppingListRecipes,
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
    ingredientsList: [],
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
      .addCase(getShoppingListRecipes.pending, handlePending)
      .addCase(getShoppingListRecipes.rejected, handleRejected)
      .addCase(getShoppingListRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.addedRecipestoShoppingList = action.payload;
      })
      .addCase(getShoppingListIngredients.pending, handlePending)
      .addCase(getShoppingListIngredients.rejected, handleRejected)
      .addCase(getShoppingListIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload);
        state.ingredientsList = action.payload;
      })
      .addCase(addRecipeItem.pending, handlePending)
      .addCase(addRecipeItem.rejected, handleRejected)
      .addCase(addRecipeItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.addedRecipestoShoppingList.push(action.payload);
      })
      .addCase(addIngredients.pending, handlePending)
      .addCase(addIngredients.rejected, handleRejected)
      .addCase(addIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload);
        state.ingredientsList = action.payload;
      })
      .addCase(deleteRecipeItem.pending, handlePending)
      .addCase(deleteRecipeItem.rejected, handleRejected)
      .addCase(deleteRecipeItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.addedRecipestoShoppingList.findIndex(item => {
          console.log(item.id);
          return item.id === action.payload;
        });
        state.addedRecipestoShoppingList.splice(index, 1);
      }),
  // .addCase(deleteIngredientItem.pending, handlePending)
  // .addCase(deleteIngredientItem.rejected, handleRejected)
  // .addCase(deleteIngredientItem.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   console.log(action.payload);
  //   state.error = null;
  //   const index = state.addedRecipestoShoppingList.findIndex(item => {
  //     console.log(item.id);
  //     // return item.id === action.payload;
  //   });
  //   // state.addedRecipestoShoppingList.splice(index, 1);
  // }),
});
// export const { addFavoriteRecipe, deleteFavorites } = shoppingSlice.actions;

export const shoppingReducer = shoppingSlice.reducer;
