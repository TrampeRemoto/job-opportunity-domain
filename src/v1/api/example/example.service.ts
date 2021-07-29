import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { create } from "./service/create";
import { V1CreateExampleInputSchema } from "./service/create/schemas/input.schema";
import { findById } from "./service/find-by-id";
import { V1FindByIdExampleInputSchema } from "./service/find-by-id/schemas/input.schema";

import { ExampleEntity, ExampleRepository } from "./example.entity";

@Injectable()
export class ExampleService {
	public constructor(
		@InjectRepository(ExampleEntity)
		private readonly exampleRepository: ExampleRepository,
	) {}

	public create(params: V1CreateExampleInputSchema) {
		return create(
			{
				exampleRepository: this.exampleRepository,
			},
			params,
		);
	}

	public findById(params: V1FindByIdExampleInputSchema) {
		return findById(
			{
				exampleRepository: this.exampleRepository,
			},
			params,
		);
	}
}
