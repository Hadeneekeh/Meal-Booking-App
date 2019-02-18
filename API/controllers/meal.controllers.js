import MealService from '../services/meal.service';


const MealController = {
  getAllMeals(req, res) {
    const allMeals = MealService.getAllMeals();
    return res.status(200).json({
      status: 'success',
      data: allMeals,
    });
  },
};

export default MealController;
