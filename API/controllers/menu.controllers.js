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

  getAllMenus(req, res) {
    const allMenus = MenuService.getAllMenus();
    return res.status(200).json({
      status: 'success',
      data: allMenus,
    });
  },
};


export default MenuController;
