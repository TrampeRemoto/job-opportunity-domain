import { FastifyRequest } from "fastify";

import { TokenPayload } from "../v1/common/guards/auth/types/token";

export interface Request extends FastifyRequest {
	user?: TokenPayload;
}
