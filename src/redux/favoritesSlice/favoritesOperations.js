import { auth, db } from '../../firebase';
import { child, get, onValue, push, ref, remove, set } from 'firebase/database';
// import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addFavorite = (userId, favoriteData) => {
  console.log('add favorite');
  // Create a reference to the "favorites" node for a specific user
  const favoritesRef = ref(db, 'favorites/' + userId);

  // Push a new favorite, which generates a unique ID
  const newFavoriteRef = push(favoritesRef);
  console.log(favoriteData);

  // Set the data at the new reference
  set(newFavoriteRef, {
    label: favoriteData.recipe.label,
    image: favoriteData.recipe.image,
    calories: favoriteData.recipe.calories,
    ingredientLines: favoriteData.recipe.ingredientLines,
    ingredients: favoriteData.recipe.ingredients,
    totalTime: favoriteData.recipe.totalTime,
    url: favoriteData.recipe.url,
    yield: favoriteData.recipe.yield,
    href: favoriteData._links.self.href,
  })
    .then(() => {
      console.log('Favorite added successfully with ID:', newFavoriteRef.key);
    })
    .catch(error => {
      console.error('Error adding favorite:', error);
    });
};

const getFavorites = userId => {
  const favoritesRef = ref(db, `favorites/${userId}`);
  onValue(
    favoritesRef,
    snapshot => {
      if (snapshot.exists()) {
        const favorites = snapshot.val();
        console.log(favorites);
        // Do something with the favorites, such as updating the UI
      } else {
        console.log('No data available');
      }
    },
    {
      onlyOnce: false, // Set to true if you only want to fetch the data once
    }
  );
};
