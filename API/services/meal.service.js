import dummyData from '../utils/dummyData';
import Meal from '../models/meal.model';

const MealService = {
  getAllMeals() {
    const validMeals = dummyData.meals.map((meal) => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.price = meal.price;
      return newMeal;
    });
    return validMeals;
  },
};

export default MealService;
