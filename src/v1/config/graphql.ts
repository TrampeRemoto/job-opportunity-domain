import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";

const { NODE_ENV } = process.env;

export const GRAPHQL_CONFIG = GraphQLModule.forRoot({
	autoSchemaFile: join(
		process.cwd(),
		NODE_ENV === "production" ? "./schema.gql" : "src/schema.gql",
	),
});
