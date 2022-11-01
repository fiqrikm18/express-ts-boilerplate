import type {RouterConst} from '../consts/router.const';
import HomeController from '../controllers/home.controller';

const homeController = new HomeController();

export const homeRouter: RouterConst[] = [
	{
		name: 'index',
		path: '/',
		method: 'GET',
		middleware: null,
		handler: homeController.index,
	},
];
