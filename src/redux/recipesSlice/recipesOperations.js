import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.edamam.com/api',
});

export const getRecipesList = createAsyncThunk(
  'recipes/getRecipesList',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get(
        `/recipes/v2?type=public&q=popular&app_id=895983dd&app_key=
19385ac259149cf92f727b8a356d63ae`
      );
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching recipes:', error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
