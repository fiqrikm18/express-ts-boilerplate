import type {Request, Response} from 'express';
import {apiResponse} from '../utils/api.util';

export default class HomeController {
	index(req: Request, res: Response) {
		return apiResponse({
			res,
			code: 200,
			msg: 'Index Page',
			data: null,
		});
	}
}
