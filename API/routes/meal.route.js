import { Router } from 'express';

import MealController from '../controllers/meal.controllers';


const router = Router();


router.get('/', MealController.getAllMeals);
router.post('/', MealController.addAMeal);

export default router;
