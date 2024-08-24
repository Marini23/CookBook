import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from './redux/selectors';
import { addNewIngredient } from './redux/shoppingSlice/shoppingOperations';

export const useAddIngredient = () => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const [showInput, setShowInput] = useState(false);
  const [newIngredientName, setNewIngredientName] = useState('');

  const toggleInput = () => {
    setShowInput(prevState => !prevState);
  };

  const handleInputChange = e => {
    setNewIngredientName(e.target.value);
  };

  const handleSubmit = () => {
    if (newIngredientName !== '') {
      const newFoodId = 'food_z' + nanoid();
      const newIngredient = {
        done: false,
        food: newIngredientName,
        foodId: newFoodId,
        weight: 100,
      };
      dispatch(addNewIngredient({ userId, newIngredient }));
    }
    setNewIngredientName('');
    setShowInput(false);
  };

  return {
    showInput,
    newIngredientName,
    toggleInput,
    handleInputChange,
    handleSubmit,
  };
};
