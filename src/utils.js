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
