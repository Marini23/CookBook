import { createSelector } from '@reduxjs/toolkit';
import { getFirstName } from 'utils';

export const selectUser = state => state.auth.user;

export const selectUserName = state => state.auth.user.name;

export const selectErrorAuth = state => state.auth.error;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectResipes = state => state.recipes.recipesList;

export const selectNextPageLink = state => state.recipes.nextPageLink;

export const selectTotalHits = state => state.recipes.totalHits;

export const selectQuery = state => state.recipes.query;

export const selectFilters = state => state.filter;

export const selectUserFirstName = createSelector([selectUser], user =>
  getFirstName(user.name)
);
