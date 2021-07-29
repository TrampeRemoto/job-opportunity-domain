import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import jwt from "jsonwebtoken";

import { AUTH_CLIENT_ID } from "./auth.constants";

import { getJwtTokenFromRequest } from "./helpers/get-jwt-token-from-request";
import { getPublicKey } from "./helpers/get-public-key";
import { isTokenExpired } from "./helpers/is-token-expired";

@Injectable()
export class AuthGuard implements CanActivate {
	public async canActivate(context: ExecutionContext): Promise<boolean> {
		try {
			const ctx = GqlExecutionContext.create(context).getContext();

			const token = getJwtTokenFromRequest(ctx.req);

			const decodedToken = jwt.decode(token, {
				complete: true,
			}) as jwt.Jwt;

			if (decodedToken?.payload.aud !== AUTH_CLIENT_ID) {
				throw new Error("Invalid token aud");
			}

			if (isTokenExpired(decodedToken?.payload.exp)) {
				throw new Error("Token expired");
			}

			const publicKey = await getPublicKey(decodedToken.payload.kid);

			jwt.verify(token, publicKey);

			return true;
		} catch (err) {
			return false;
		}
	}
}
