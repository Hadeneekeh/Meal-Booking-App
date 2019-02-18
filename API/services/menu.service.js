import dummyData from '../utils/dummyData';
import Menu from '../models/menu.model';

const MenuService = {
  addMenu(menu) {
    const menuLength = dummyData.menus.length;
    const lastId = dummyData.menus[menuLength - 1].id;
    const newId = lastId + 1;
    menu.id = newId;
    dummyData.menus.push(menu);
    return menu;
  },
};


export default MenuService;
