import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";

import { MockRepository } from "../repository";

import { ExampleService } from "v1/api/example/example.service";

import { ExampleEntity } from "v1/api/example/example.entity";

export const service = (mockRepository: MockRepository) => async () => {
	const module: TestingModule = await Test.createTestingModule({
		providers: [
			ExampleService,
			{
				provide: getRepositoryToken(ExampleEntity),
				useValue: mockRepository,
			},
		],
	}).compile();

	return module.get<ExampleService>(ExampleService);
};
