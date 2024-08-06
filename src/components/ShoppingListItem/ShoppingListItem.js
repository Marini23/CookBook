export const ShoppingListItem = ingredient => {
  return (
    <div>
      <div>state icon</div>
      <div>
        <p>{ingredient.ingredient.food}</p>
        <div>
          <button type="button">-</button>
          <p>{Math.ceil(ingredient.ingredient.weight)}</p>
          <button type="button">+</button>
          <p>g</p>
        </div>
      </div>
      <div>delete icon</div>
    </div>
  );
};
