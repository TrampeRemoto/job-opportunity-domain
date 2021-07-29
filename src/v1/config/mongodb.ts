import { TypeOrmModule } from "@nestjs/typeorm";

import { ExampleEntity } from "v1/api/example/example.entity";

const { NODE_ENV, MONGODB_URL } = process.env;

export const MONGO_DB_CONNECT = TypeOrmModule.forRoot({
	type: "mongodb",
	url: MONGODB_URL,
	synchronize: false,
	logging: NODE_ENV !== "production",
	entities: [ExampleEntity],
});
