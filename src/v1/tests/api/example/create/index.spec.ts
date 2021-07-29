import { ExampleService } from "v1/api/example/example.service";

import { getDescribe } from "v1/tests/helpers/get-describe";

import { exampleMock } from "v1/tests/mocks/example";

// eslint-disable-next-line jest/valid-title
describe(getDescribe(__filename), () => {
	let service: ExampleService;

	beforeAll(async () => {
		service = await exampleMock.service();
	});

	it("should be defined", () => {
		expect(service).toBeDefined();
	});

	it("should return example value with valid params", async () => {
		const doc = exampleMock.doc({
			thisIsAnParam: "aaa",
		});

		exampleMock.repository.save.mockResolvedValueOnce(doc);

		const result = await service.create({
			thisIsAnParam: "Test",
		});

		expect(result).toStrictEqual(doc);
	});
});
