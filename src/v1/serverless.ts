/* eslint-disable @typescript-eslint/prefer-ts-expect-error */

import { NestFactory } from "@nestjs/core";
import {
	FastifyAdapter,
	NestFastifyApplication,
} from "@nestjs/platform-fastify";
import {
	Context,
	APIGatewayProxyEvent,
	APIGatewayProxyResult,
} from "aws-lambda";
import { proxy } from "aws-serverless-fastify";
import fastify, { FastifyInstance } from "fastify";

import { V1Module } from "./v1.module";

let cachedServer: FastifyInstance;

const bootstrap = async (): Promise<FastifyInstance> => {
	const instance: FastifyInstance = fastify();

	const nestApp = await NestFactory.create<NestFastifyApplication>(
		V1Module,
		new FastifyAdapter(instance as any),
	);

	nestApp.enableCors();

	await nestApp.init();

	return instance;
};

const isWarmUp = (event: APIGatewayProxyEvent) =>
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	event.source === "serverless-plugin-warmup";

export const handler = async (
	event: APIGatewayProxyEvent,
	context: Context,
): Promise<APIGatewayProxyResult | void> => {
	if (isWarmUp(event)) {
		/**
		 * If it's an event to keep the lambda warm,
		 * return here to stop the lambda execution
		 * as soon as possible
		 */
		return;
	}

	if (!cachedServer) {
		// eslint-disable-next-line require-atomic-updates
		cachedServer = await bootstrap();
	}

	return proxy(cachedServer, event, context);
};
