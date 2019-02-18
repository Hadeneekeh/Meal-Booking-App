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

  addMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },
};


export default MealService;
