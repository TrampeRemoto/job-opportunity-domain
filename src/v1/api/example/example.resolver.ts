import { Args, Mutation, Resolver, Query } from "@nestjs/graphql";

import { ExampleService } from "./example.service";

import { V1CreateExampleInputSchema } from "./service/create/schemas/input.schema";
import { V1FindByIdExampleInputSchema } from "./service/find-by-id/schemas/input.schema";

import { ExampleEntity } from "./example.entity";

@Resolver("example")
export class ExampleResolver {
	public constructor(private readonly exampleService: ExampleService) {}

	@Mutation(() => ExampleEntity)
	public create(@Args("data") data: V1CreateExampleInputSchema) {
		return this.exampleService.create(data);
	}

	@Query(() => ExampleEntity)
	public findById(@Args("data") data: V1FindByIdExampleInputSchema) {
		return this.exampleService.findById(data);
	}
}
