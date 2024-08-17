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

const deleteRecipeIngredientsFromShoppingList = (userId, ingredients) => {
  return new Promise((resolve, reject) => {
    const shoppingRef = ref(db, `shoppingIngredients/${userId}`);
    console.log(ingredients);
    // Fetch the current ingredients
    onValue(
      shoppingRef,
      snapshot => {
        const existingIngredients = snapshot.val() || {};

        // Loop through the ingredients to remove
        ingredients.forEach(ingredientToRemove => {
          const { foodId, weight: weightToRemove } = ingredientToRemove;

          // Check if the ingredient exists in the list
          if (existingIngredients[foodId]) {
            // Reduce the weight of the ingredient
            existingIngredients[foodId].weight -= weightToRemove;

            // If the resulting weight is 0 or less, delete the ingredient
            if (existingIngredients[foodId].weight <= 0) {
              delete existingIngredients[foodId];
            }
          }
        });

        // Update the Firebase database with the modified ingredients list
        set(shoppingRef, existingIngredients)
          .then(() => {
            // Convert the updated ingredients object to an array and resolve the promise
            resolve(Object.values(existingIngredients));
          })
          .catch(error => {
            console.error('Error updating ingredients:', error);
            reject(error);
          });
      },
      { onlyOnce: true } // Ensure we only fetch data once
    );
  });
};

const deleteIngredientFromShoppingList = (userId, foodId) => {
  return new Promise((resolve, reject) => {
    const recipeRef = ref(db, `shoppingIngredients/${userId}/${foodId}`);
    remove(recipeRef)
      .then(() => {
        console.log(`Ingredient with href ${foodId} deleted successfully`);
        resolve(foodId);
      })
      .catch(error => {
        console.error('Error deleting ingredient:', error);
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

export const updateIngredientsRecipeFromShoppingList = createAsyncThunk(
  'shoppingList/updateIngredients',
  async ({ userId, ingredients }, { rejectWithValue }) => {
    try {
      // Call the function to update/delete ingredients
      const updatedIngredients = await deleteRecipeIngredientsFromShoppingList(
        userId,
        ingredients
      );
      return updatedIngredients; // This will be the payload in the fulfilled case
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteIngredientItem = createAsyncThunk(
  'shopping/deleteIngredient',
  async ({ userId, foodId }, thunkAPI) => {
    try {
      console.log(foodId);
      const deletedIngredient = await deleteIngredientFromShoppingList(
        userId,
        foodId
      );
      console.log(`Deleted ingredient: ${deletedIngredient}`);
      return deletedIngredient;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);
