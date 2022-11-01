import * as fs from 'fs';
import * as path from 'path';
import * as jwt from 'jsonwebtoken';

export enum KeyType {
	PRIVATE,
	PUBLIC,
}

type TokenPayload = {
	username: string;
};

export class TokenUtil {
	private readonly privateToken: string;
	private readonly publicToken: string;

	constructor() {
		this.privateToken = TokenUtil.readKey(KeyType.PRIVATE);
		this.publicToken = TokenUtil.readKey(KeyType.PUBLIC);
	}

	private static readKey(keyType: KeyType): string {
		let file: Buffer;

		switch (keyType) {
			case KeyType.PRIVATE:
				file = fs.readFileSync(path.join(__dirname, '../../', 'keys/app.rsa'));
				break;
			case KeyType.PUBLIC:
				file = fs.readFileSync(path.join(__dirname, '../../', 'keys/app.rsa.pub'));
				break;
		}

		return file.toString();
	}

	generateToken(payload: TokenPayload): string {
		return jwt.sign(payload, this.privateToken, {
			expiresIn: '1h',
			algorithm: 'RS256',
		});
	}

	verifyToken(token: string): boolean {
		try {
			jwt.verify(token, this.publicToken);
			return true;
		} catch (e) {
			return false;
		}
	}
}
