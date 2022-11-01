import {TokenUtil} from '../../src/utils/token.util';
import {describe, test, expect} from '@jest/globals';

describe('Test Token', () => {
	let tokenUtils: TokenUtil;
	beforeEach(() => {
		tokenUtils = new TokenUtil();
	});

	test('generate token', () => {
		const token = tokenUtils.generateToken({
			username: 'test username',
		});

		expect(token).not.toBe('');
	});

	test('verify token success', () => {
		const token = tokenUtils.generateToken({
			username: 'test username',
		});
		expect(token).not.toBe('');

		const verify = tokenUtils.verifyToken(token);
		expect(verify).toBeTruthy();
	});

	test('verify token failed', () => {
		const verify = tokenUtils.verifyToken('asd');
		expect(verify).toBeFalsy();
	});
});
