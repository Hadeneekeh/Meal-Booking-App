import { Router } from 'express';

import MenuController from '../controllers/menu.controllers';


const router = Router();

router.get('/', MenuController.getAllMenus);
router.post('/', MenuController.addAMenu);

export default router;
