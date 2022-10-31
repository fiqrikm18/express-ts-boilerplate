import type {Response} from 'express';

type ApiResponseParams = {
	res: Response;
	code: number;
	msg: string;
	data: any;
};

export const apiResponse = ({res, code, msg, data}: ApiResponseParams) => {
	if (typeof data === 'undefined') {
		data = null;
	}

	return res.json({
		code,
		msg,
		data,
	});
};
