import jwksClient from "jwks-rsa";

import { AUTH_AUTHORITY } from "../auth.constants";

export const getPublicKey = async (kid: string) => {
	const client = jwksClient({
		jwksUri: `${AUTH_AUTHORITY}/.well-known/jwks.json`,
		requestHeaders: {},
		timeout: 2000,
	});

	const key = await client.getSigningKey(kid);

	return key.getPublicKey();
};
