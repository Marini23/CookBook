export const FilterMobileForm = () => {
  return (
    <form>
      <div>
        <div>
          <label>
            Calories
            <div>
              <span>From</span>
              <input type="number" name="caloriesFrom" />
            </div>
            <div>
              <span>To</span>
              <input type="number" name="caloriesTo" />
            </div>
          </label>
        </div>
        <div>
          <label>
            Ingredients
            <div>
              <span>Up to</span>
              <input type="number" name="ingredientsTo" />
            </div>
          </label>
        </div>
      </div>
    </form>
  );
};
