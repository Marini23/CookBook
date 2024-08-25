import { db } from '../../firebase';
import { onValue, push, ref, remove, set, update } from 'firebase/database';
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
          resolve(ingredientsArray);
        } else {
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
          if (weight > 0) {
            if (updatedIngredients[foodId]) {
              // Ingredient already exists, update the weight
              updatedIngredients[foodId].weight += weight;
            } else {
              // Ingredient doesn't exist, add it to the list
              updatedIngredients[foodId] = {
                foodId,
                food,
                weight,
                done: false,
              };
            }
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

export const addNewIngredientToShoppingList = (userId, newIngredient) => {
  return new Promise((resolve, reject) => {
    const shoppingRef = ref(db, 'shoppingIngredients/' + userId); // Reference to user's shopping ingredients

    const updatedIngredient = {
      ...newIngredient,
    };

    const updates = {};
    updates[newIngredient.foodId] = updatedIngredient;

    update(shoppingRef, updates)
      .then(() => {
        resolve(updatedIngredient);
      })
      .catch(error => {
        console.error('Error adding new ingredient:', error);
        reject(error);
      });
  });
};

const deleteRecipeFromShoppingList = (userId, recipeId) => {
  return new Promise((resolve, reject) => {
    const recipeRef = ref(db, `shoppingRecipes/${userId}/${recipeId}`);
    remove(recipeRef)
      .then(() => {
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

const incrementWeightIngredient = (userId, foodId) => {
  return new Promise((resolve, reject) => {
    const ingredientRef = ref(db, `shoppingIngredients/${userId}/${foodId}`);
    onValue(
      ingredientRef,
      snapshot => {
        const incrementIngredient = snapshot.val();
        incrementIngredient.weight += 100;

        // Update the Firebase database with the modified ingredients list
        set(ingredientRef, incrementIngredient)
          .then(() => {
            // Convert the updated ingredients object to an array and resolve the promise
            resolve(incrementIngredient);
          })
          .catch(error => {
            console.error('Error updating ingredient:', error);
            reject(error);
          });
      },
      { onlyOnce: true } // Ensure we only fetch data once
    );
  });
};

const decrementWeightIngredient = (userId, foodId) => {
  return new Promise((resolve, reject) => {
    const ingredientRef = ref(db, `shoppingIngredients/${userId}/${foodId}`);

    onValue(
      ingredientRef,
      snapshot => {
        const ingredient = snapshot.val();

        if (!ingredient) {
          reject(new Error('Ingredient not found'));
          return;
        }

        // Decrement weight
        ingredient.weight -= 100;

        if (ingredient.weight <= 0) {
          // Remove ingredient if weight is zero or less
          remove(ingredientRef)
            .then(() => resolve({ foodId })) // Return foodId
            .catch(error => {
              console.error('Error removing ingredient:', error);
              reject(error);
            });
        } else {
          // Update the ingredient weight in the database
          set(ingredientRef, ingredient)
            .then(() => resolve(ingredient))
            .catch(error => {
              console.error('Error updating ingredient:', error);
              reject(error);
            });
        }
      },
      { onlyOnce: true }
    );
  });
};

export const toggleIngredientDone = (userId, foodId, currentDoneState) => {
  return new Promise((resolve, reject) => {
    const ingredientRef = ref(db, `shoppingIngredients/${userId}/${foodId}`);

    // Toggle the done state
    const updatedDoneState = !currentDoneState;

    // Update the 'done' property in Firebase
    update(ingredientRef, { done: updatedDoneState })
      .then(() => {
        resolve({ foodId, done: updatedDoneState }); // Return updated foodId and done state
      })
      .catch(error => {
        console.error('Error updating ingredient:', error);
        reject(error);
      });
  });
};

const clearShoppingListAndRecipes = userId => {
  return new Promise((resolve, reject) => {
    const shoppingIngredientsRef = ref(db, 'shoppingIngredients/' + userId);

    const shoppingRecipesRef = ref(db, 'shoppingRecipes/' + userId);

    const removeIngredients = remove(shoppingIngredientsRef);
    const removeRecipes = remove(shoppingRecipesRef);

    // Wait for both remove operations to complete
    Promise.all([removeIngredients, removeRecipes])
      .then(() => {
        resolve();
      })
      .catch(error => {
        console.error('Error clearing shopping list and recipes:', error);
        reject(error);
      });
  });
};

// Redux store

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
      // console.log(recipeId);
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

export const incrementIngredient = createAsyncThunk(
  'shopping/incrementIngredientWeihgt',
  async ({ userId, foodId }, thunkAPI) => {
    try {
      const incrementIngredient = await incrementWeightIngredient(
        userId,
        foodId
      );
      console.log(`Increment ingredient: ${incrementIngredient}`);
      return incrementIngredient;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

export const decrementIngredient = createAsyncThunk(
  'shopping/decrementIngredientWeihgt',
  async ({ userId, foodId }, thunkAPI) => {
    try {
      const decrementIngredient = await decrementWeightIngredient(
        userId,
        foodId
      );
      console.log(`Decrement ingredient: ${decrementIngredient}`);
      return decrementIngredient;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

export const addNewIngredient = createAsyncThunk(
  'shopping/addIngredient',
  async ({ userId, newIngredient }, thunkAPI) => {
    try {
      console.log(newIngredient);
      addNewIngredientToShoppingList(userId, newIngredient);
      return newIngredient;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

export const updateIngredientDone = createAsyncThunk(
  'shopping/updateIngredientDone',
  async ({ userId, foodId, currentDoneState }, thunkAPI) => {
    try {
      const result = await toggleIngredientDone(
        userId,
        foodId,
        currentDoneState
      );
      return result;
    } catch (error) {
      const serializedError = {
        code: error.code,
        message: error.message,
      };
      return thunkAPI.rejectWithValue(serializedError);
    }
  }
);

export const clearAllShoppingData = createAsyncThunk(
  'shopping/clearAllShoppingData',
  async (userId, thunkAPI) => {
    try {
      await clearShoppingListAndRecipes(userId);
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message }); // Handle errors
    }
  }
);
