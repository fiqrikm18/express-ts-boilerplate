import type {Request, Response} from 'express';
import {apiResponse} from '../handlers/api.handler';

export default class HomeController {
	index(req: Request, res: Response) {
		return apiResponse({
			res: res,
			code: 200,
			msg: 'Index Page',
			data: null
		})
	}
}
