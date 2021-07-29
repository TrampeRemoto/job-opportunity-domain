import { V1CreateExampleInputSchema } from "./schemas/input.schema";

import { validate } from "./validate";

import { ExampleRepository } from "../../example.entity";

interface Injectables {
	exampleRepository: ExampleRepository;
}

export const create = async (
	{ exampleRepository }: Injectables,
	params: V1CreateExampleInputSchema,
) => {
	const data = await validate(params);

	return exampleRepository.save(data);
};
