import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const getFirstName = fullName => {
  if (!fullName) return '';
  return fullName.split(' ')[0];
};

export const truncateString = (str, maxWidth, font) => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;

  let width = context.measureText(str).width;
  if (width <= maxWidth) {
    return str;
  }

  while (width > maxWidth) {
    str = str.slice(0, -1);
    width = context.measureText(str + '...').width;
  }

  return str + '...';
};

export const capitalizeFirstLetter = string => {
  if (!string) return string; // Check if the string is empty or null
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getRecipeIdFromUrl = url => {
  const urlObj = new URL(url);
  const pathSegments = urlObj.pathname.split('/');
  const recipeId = pathSegments[pathSegments.length - 1];
  return recipeId;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
