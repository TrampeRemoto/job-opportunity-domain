import { V1CreateExampleInputSchema } from "v1/api/example/service/create/schemas/input.schema";

import { getDescribe } from "v1/tests/helpers/get-describe";

import { validate } from "v1/api/example/service/create/validate";

// eslint-disable-next-line jest/valid-title
describe(getDescribe(__filename), () => {
	it("should do nothing with valid params", async () => {
		let result;

		try {
			result = await validate({
				thisIsAnParam: "example",
			});
		} catch (e) {
			result = e;
		}

		expect(result).toStrictEqual({
			thisIsAnParam: "example",
		});
	});

	it("should throw an error with invalid params (undefined)", async () => {
		let result;

		try {
			result = await validate(
				undefined as unknown as V1CreateExampleInputSchema,
			);
		} catch (e) {
			result = e;
		}

		expect(result.status).toBe(400);
		expect(result.response).toMatchObject({
			errors: ["this is a required field"],
		});
	});

	it("should throw an error with invalid params (string)", async () => {
		let result;

		try {
			result = await validate("" as unknown as V1CreateExampleInputSchema);
		} catch (e) {
			result = e;
		}

		expect(result.status).toBe(400);
		expect(result.response).toMatchObject({
			errors: ['this must be a `object` type, but the final value was: `""`.'],
		});
	});

	it("should throw an error with invalid params (number)", async () => {
		let result;

		try {
			result = await validate(1 as unknown as V1CreateExampleInputSchema);
		} catch (e) {
			result = e;
		}

		expect(result.status).toBe(400);
		expect(result.response).toMatchObject({
			errors: ["this must be a `object` type, but the final value was: `1`."],
		});
	});

	it("should throw an error without thisIsAnParam", async () => {
		let result;

		try {
			result = await validate({} as V1CreateExampleInputSchema);
		} catch (e) {
			result = e;
		}

		expect(result.status).toBe(400);
		expect(result.response).toMatchObject({
			errors: ["thisIsAnParam is a required field"],
		});
	});

	it("should throw an error with invalid thisIsAnParam type", async () => {
		let result;

		try {
			result = await validate({
				thisIsAnParam: 123 as any,
			});
		} catch (e) {
			result = e;
		}

		expect(result.status).toBe(400);
		expect(result.response).toMatchObject({
			errors: [
				"thisIsAnParam must be a `string` type, but the final value was: `123`.",
			],
		});
	});
});
