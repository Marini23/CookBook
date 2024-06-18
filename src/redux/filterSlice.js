import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: `filter`,
  initialState: {
    caloriesFrom: null,
    caloriesTo: null,
    ingredients: null,
    diet: null,
    allergies: null,
  },

  reducers: {
    changeFilter(state, action) {
      return { ...state, ...action.payload };
    },
    resetFilter(state, action) {
      return (state = {
        caloriesFrom: null,
        caloriesTo: null,
        ingredients: null,
        diet: [],
        allergies: null,
      });
    },
  },
});

export const { changeFilter, resetFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
