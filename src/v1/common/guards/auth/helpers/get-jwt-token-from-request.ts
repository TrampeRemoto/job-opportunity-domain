import { FastifyRequest } from "fastify";

export const getJwtTokenFromRequest = (req: FastifyRequest) =>
	req.headers.authorization?.replace("Bearer ", "") || "";
