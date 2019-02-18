import MenuService from '../services/menu.service';


const MenuController = {
  addAMenu(req, res) {
    const newMenu = req.body;
    const createdMenu = MenuService.addMenu(newMenu);
    return res.status(201).json({
      status: 'success',
      data: createdMenu,
    });
  },
};


export default MenuController;
