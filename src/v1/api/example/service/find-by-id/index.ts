import { V1FindByIdExampleInputSchema } from "./schemas/input.schema";

import { validate } from "./validate";

import { ExampleRepository } from "../../example.entity";

interface Injectables {
	exampleRepository: ExampleRepository;
}

export const findById = async (
	{ exampleRepository }: Injectables,
	params: V1FindByIdExampleInputSchema,
) => {
	const { id } = await validate(params);

	return exampleRepository.findOne(id);
};
