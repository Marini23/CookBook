import { createSlice } from '@reduxjs/toolkit';
import {
  addIngredients,
  addNewIngredient,
  addRecipeItem,
  clearAllShoppingData,
  decrementIngredient,
  deleteIngredientItem,
  deleteRecipeItem,
  getShoppingListIngredients,
  getShoppingListRecipes,
  incrementIngredient,
  updateIngredientDone,
  updateIngredientsRecipeFromShoppingList,
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
        // console.log(action.payload);
        state.ingredientsList = action.payload;
      })
      .addCase(addRecipeItem.pending, handlePending)
      .addCase(addRecipeItem.rejected, handleRejected)
      .addCase(addRecipeItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        console.log(action.payload);
        state.addedRecipestoShoppingList.push(action.payload);
      })
      .addCase(addIngredients.pending, handlePending)
      .addCase(addIngredients.rejected, handleRejected)
      .addCase(addIngredients.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // console.log(action.payload);
        state.ingredientsList = action.payload;
      })
      .addCase(addNewIngredient.pending, handlePending)
      .addCase(addNewIngredient.rejected, handleRejected)
      .addCase(addNewIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // console.log(action.payload);
        state.ingredientsList.push(action.payload);
      })
      .addCase(deleteRecipeItem.pending, handlePending)
      .addCase(deleteRecipeItem.rejected, handleRejected)
      .addCase(deleteRecipeItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.addedRecipestoShoppingList.findIndex(item => {
          return item.id === action.payload;
        });

        console.log(index);
        if (index !== -1) {
          state.addedRecipestoShoppingList.splice(index, 1);
        }
      })
      .addCase(updateIngredientsRecipeFromShoppingList.pending, handlePending)
      .addCase(updateIngredientsRecipeFromShoppingList.rejected, handleRejected)
      .addCase(
        updateIngredientsRecipeFromShoppingList.fulfilled,
        (state, action) => {
          state.ingredientsList = action.payload;
        }
      )
      .addCase(deleteIngredientItem.pending, handlePending)
      .addCase(deleteIngredientItem.rejected, handleRejected)
      .addCase(deleteIngredientItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.ingredientsList.findIndex(item => {
          return item.foodId === action.payload;
        });
        state.ingredientsList.splice(index, 1);
      })
      .addCase(incrementIngredient.pending, handlePending)
      .addCase(incrementIngredient.rejected, handleRejected)
      .addCase(incrementIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.ingredientsList.findIndex(item => {
          return item.foodId === action.payload.foodId;
        });
        console.log(index);
        state.ingredientsList[index] = action.payload;
      })
      .addCase(decrementIngredient.pending, handlePending)
      .addCase(decrementIngredient.rejected, handleRejected)
      .addCase(decrementIngredient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        // Ensure payload contains either updated ingredient or an id to remove

        const index = state.ingredientsList.findIndex(
          item => item.foodId === action.payload.foodId
        );
        if (action.payload.weight > 100) {
          // Update the ingredient if it's not deleted
          state.ingredientsList[index] = action.payload;
        } else {
          // Remove the ingredient if its weight is 0 or less 100
          state.ingredientsList.splice(index, 1);
        }
      })
      .addCase(updateIngredientDone.pending, handlePending)
      .addCase(updateIngredientDone.rejected, handlePending)
      .addCase(updateIngredientDone.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        // Find the ingredient and update its 'done' property
        const index = state.ingredientsList.findIndex(
          ingredient => ingredient.foodId === action.payload.foodId
        );
        if (index !== -1) {
          state.ingredientsList[index].done = action.payload.done;
        }
      })
      .addCase(clearAllShoppingData.pending, handlePending)
      .addCase(clearAllShoppingData.rejected, handlePending)
      .addCase(clearAllShoppingData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.ingredientsList = [];
        state.addedRecipestoShoppingList = [];
      }),
});
// export const { addFavoriteRecipe, deleteFavorites } = shoppingSlice.actions;

export const shoppingReducer = shoppingSlice.reducer;
