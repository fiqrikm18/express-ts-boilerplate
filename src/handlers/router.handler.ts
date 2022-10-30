import type {Express, Request, Response} from 'express';
import type {RouterConst} from '../consts/router.const';

export default class RouterHandler {
	constructor(protected app: Express) {
		this.app = app;
	}

	registerRouter(routers: RouterConst[]) {
		routers.forEach(router => {
			switch (router.method) {
				case 'GET':
					if (router.middleware) {
						this.app.get(router.path, router.middleware, router.handler);
					} else {
						this.app.get(router.path, router.handler);
					}

					break;
				case 'POST':
					if (router.middleware) {
						this.app.post(router.path, router.middleware, router.handler);
					} else {
						this.app.post(router.path, router.handler);
					}

					break;
				case 'PUT':
					if (router.middleware) {
						this.app.put(router.path, router.middleware, router.handler);
					} else {
						this.app.put(router.path, router.handler);
					}

					break;
				case 'PATCH':
					if (router.middleware) {
						this.app.patch(router.path, router.middleware, router.handler);
					} else {
						this.app.patch(router.path, router.handler);
					}

					break;
				case 'DELETE':
					if (router.middleware) {
						this.app.delete(router.path, router.middleware, router.handler);
					} else {
						this.app.delete(router.path, router.handler);
					}

					break;
				default:
					this.app.get('/forbidden', (req: Request, res: Response) => {
						res.json({
							code: '405',
							msg: 'Method not allowed',
							data: {},
						});
					});
			}
		});
	}

	run() {
		const port = process.env.PORT ?? 8080;
		this.app.listen(port, () => {
			console.log(`Server running on port ${port}`);
		});
	}
}
