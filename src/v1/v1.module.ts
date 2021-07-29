import { Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { AuthInterceptor } from "v1/common/guards/auth";

import { API } from "./api";

import { GRAPHQL_CONFIG } from "./config/graphql";
import { MONGO_DB_CONNECT } from "./config/mongodb";

@Module({
	imports: [GRAPHQL_CONFIG, MONGO_DB_CONNECT, ...API],
	providers: [
		{
			provide: APP_INTERCEPTOR,
			useClass: AuthInterceptor,
		},
	],
})
export class V1Module {}
