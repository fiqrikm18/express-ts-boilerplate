import express from 'express';
import RouterHandler from './handlers/router.handler';
import {routers} from './routers';
import type {RouterConst} from './consts/router.const';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
app.use(helmet());
app.use(morgan('combined'));
app.use(bodyParser({
	extended: true,
}));

const router = new RouterHandler(app);
routers.forEach((route: RouterConst[]) => {
	router.registerRouter(route);
});

router.run();
