import {
	Injectable,
	NestInterceptor,
	ExecutionContext,
	CallHandler,
} from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import jwt from "jsonwebtoken";
import { Observable } from "rxjs";

import { getJwtTokenFromRequest } from "./helpers/get-jwt-token-from-request";

import { RawTokenPayload } from "./types/token";

@Injectable()
export class AuthInterceptor implements NestInterceptor {
	public intercept(
		context: ExecutionContext,
		next: CallHandler,
	): Observable<any> {
		const ctx = GqlExecutionContext.create(context).getContext();

		const token = getJwtTokenFromRequest(ctx.req);

		const decodedToken = jwt.decode(token) as RawTokenPayload;

		ctx.req.user = {
			...decodedToken,
		};

		return next.handle();
	}
}
