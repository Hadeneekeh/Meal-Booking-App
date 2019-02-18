import MealService from '../services/meal.service';


const MealController = {
  getAllMeals(req, res) {
    const allMeals = MealService.getAllMeals();
    return res.status(200).json({
      status: 'success',
      data: allMeals,
    });
  },

  addAMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MealService.addMeal(newMeal);
    return res.status(201).json({
      status: 'success',
      data: createdMeal,
    });
  },
};


export default MealController;
