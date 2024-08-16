import { db } from '../../firebase';
import { onValue, push, ref, remove, set } from 'firebase/database';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getRecipesInShoppingList = userId => {
  return new Promise((resolve, reject) => {
    const recipesRef = ref(db, `shoppingRecipes/${userId}`);
    onValue(
      recipesRef,
      snapshot => {
        if (snapshot.exists()) {
          const recipes = snapshot.val();
          const recipesArray = Object.values(recipes);
          resolve(recipesArray);
        } else {
          console.log('No data available');
          resolve([]);
        }
      },
      error => {
        reject(error);
      }
    );
  });
};

const getIngredientsInShoppingList = userId => {
  return new Promise((resolve, reject) => {
    const recipesRef = ref(db, `shoppingIngredients/${userId}`);
    onValue(
      recipesRef,
      snapshot => {
        if (snapshot.exists()) {
          const ingredients = snapshot.val();
          const ingredientsArray = Object.values(ingredients);
          console.log(ingredientsArray);
          resolve(ingredientsArray);
        } else {
          console.log('No data available');
          resolve([]);
        }
      },
      error => {
        reject(error);
      }
    );
  });
};

const addRecipeToShoppingList = (userId, recipeData) => {
  return new Promise((resolve, reject) => {
    const shoppingRef = ref(db, 'shoppingRecipes/' + userId);
    const newShoppingRef = push(shoppingRef);
    const timeOfAdding = Date.now();
    console.log(timeOfAdding);

    const extractedIngredients = recipeData.recipe.ingredients.map(
      ingredient => ({
        food: ingredient.food,
        foodId: ingredient.foodId,
        weight: ingredient.weight,
      })
    );
    set(newShoppingRef, {
      id: newShoppingRef.key,
      label: recipeData.recipe.label,
      defaultImage: recipeData.recipe.image,
      images: recipeData.recipe.images,
      ingredients: extractedIngredients,
      idLink: recipeData._links.self.href,
      timeOfAdding: timeOfAdding,
    })
      .then(() => {
        resolve({
          id: newShoppingRef.key,
          defaultImage: recipeData.recipe.image,
          label: recipeData.recipe.label,
          images: recipeData.recipe.images,
          ingredients: extractedIngredients,
          idLink: recipeData._links.self.href,
          timeOfAdding: timeOfAdding,
        });
      })
      .catch(error => {
        console.error('Error adding recipe:', error);
        reject(error);
      });
  });
};

const addIngredientToShoppingList = (userId, recipeData) => {
  return new Promise((resolve, reject) => {
    const shoppingRef = ref(db, 'shoppingIngredients/' + userId);

    // onValue(
    //   shoppingRef,
    //   snapshot => {
    //     if (snapshot.exists()) {
    //       const ingredients = snapshot.val();
    //       const updatedIngredients = { ...ingredients };

    //       // Process ingredients from recipeData
    //       recipeData.recipe.ingredients.forEach(ingredient => {
    //         const { foodId, food, weight } = ingredient;

    //         if (updatedIngredients[foodId]) {
    //           // Ingredient already exists, update the weight
    //           updatedIngredients[foodId].weight += weight;
    //         } else {
    //           // Ingredient doesn't exist, add it to the list
    //           updatedIngredients[foodId] = {
    //             foodId,
    //             food,
    //             weight,
    //             done: false,
    //           };
    //         }
    //       });
    //       // Save the updated ingredients list back to Firebase
    //       set(shoppingRef, updatedIngredients)
    //         .then(() => {
    //           const ingredientsArray = Object.values(updatedIngredients);
    //           resolve(ingredientsArray);
    //         })
    //         .catch(error => {
    //           console.error('Error adding ingredients:', error);
    //           reject(error);
    //         });
    //     }
    //   },
    //   {
    //     onlyOnce: true, // Ensure the listener only fetches data once
    //   }
    // );
    onValue(
      shoppingRef,
      snapshot => {
        const existingIngredients = snapshot.val() || {};
        console.log(existingIngredients);
        const updatedIngredients = { ...existingIngredients };
        console.log(updatedIngredients);
        // Process ingredients from recipeData
        recipeData.recipe.ingredients.forEach(ingredient => {
          const { foodId, food, weight } = ingredient;

          if (updatedIngredients[foodId]) {
            // Ingredient already exists, update the weight
            updatedIngredients[foodId].weight += weight;
          } else {
            // Ingredient doesn't exist, add it to the list
            updatedIngredients[foodId] = { foodId, food, weight, done: false };
          }
        });
        const ingredientsArray = Object.values(updatedIngredients);
        // Save the updated ingredients list back to Firebase
        set(shoppingRef, updatedIngredients)
          .then(() => {
            resolve(ingredientsArray);
          })
          .catch(error => {
            console.error('Error adding ingredients:', error);
            reject(error);
          });
      },
      { onlyOnce: true } // Ensure we only fetch data once
    );
  });
};
const deleteRecipeFromShoppingList = (userId, recipeId) => {
  return new Promise((resolve, reject) => {
    const recipeRef = ref(db, `shoppingRecipes/${userId}/${recipeId}`);
    remove(recipeRef)
      .then(() => {
        console.log(`Recipe with href ${recipeId} deleted successfully`);
        resolve(recipeId);
      })
      .catch(error => {
        console.error('Error deleting recipe:', error);
        reject(error);
      });
  });
};

export const getShoppingListRecipes = createAsyncThunk(
  'shopping/getShoppingListRecipes',
  async (userId, thunkAPI) => {
    try {
      const recipesList = getRecipesInShoppingList(userId);
      return recipesList;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

export const getShoppingListIngredients = createAsyncThunk(
  'shopping/getShoppingListIngredients',
  async (userId, thunkAPI) => {
    try {
      const ingredientsList = getIngredientsInShoppingList(userId);
      return ingredientsList;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

export const addRecipeItem = createAsyncThunk(
  'shopping/addRecipe',
  async ({ userId, recipeInfo }, thunkAPI) => {
    try {
      console.log('add');
      console.log(recipeInfo);
      const shoppingListItem = addRecipeToShoppingList(userId, recipeInfo);
      return shoppingListItem;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

export const addIngredients = createAsyncThunk(
  'shopping/addIngredients',
  async ({ userId, recipeInfo }, thunkAPI) => {
    try {
      console.log('addIngredient');
      console.log(recipeInfo);
      const shoppingListIngredients = addIngredientToShoppingList(
        userId,
        recipeInfo
      );
      return shoppingListIngredients;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

export const deleteRecipeItem = createAsyncThunk(
  'shopping/deleteRecipe',
  async ({ userId, recipeId }, thunkAPI) => {
    try {
      console.log(recipeId);
      const deletedRecipe = await deleteRecipeFromShoppingList(
        userId,
        recipeId
      );
      console.log(`Deleted recipe: ${deletedRecipe}`);
      return deletedRecipe;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

// export const deleteIngredientItem = createAsyncThunk(
//   'shopping/deleteIngredient',
//   async ({ userId, ingredientId }, thunkAPI) => {
//     try {
//       console.log(`Deleting ingredient: ${ingredientId}`);
//       const deletedIngredient = await deleteIngredientFromShoppingList(
//         userId,
//         ingredientId
//       );
//       if (deletedIngredient) {
//         console.log(`Deleted ingredient: ${deletedIngredient}`);
//         return deletedIngredient;
//       } else {
//         return thunkAPI.rejectWithValue({ message: 'Ingredient not found' });
//       }
//     } catch (error) {
//       const serializedError = {
//         code: error.code,
//         message: error.message,
//       };
//       return thunkAPI.rejectWithValue(serializedError);
//     }
//   }
// );
