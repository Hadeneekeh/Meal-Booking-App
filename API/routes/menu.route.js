import { Router } from 'express';

import MenuController from '../controllers/menu.controllers';


const router = Router();

router.post('/', MenuController.addAMenu);

export default router;
