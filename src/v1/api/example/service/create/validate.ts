import { V1CreateExampleInputSchema } from "./schemas/input.schema";

import { errorUtil } from "v1/utils/error";
import { yup } from "v1/utils/yup";

const schema = yup.object().required().strict().shape({
	thisIsAnParam: yup.string().strict().required(),
});

export const validate = (params: V1CreateExampleInputSchema) =>
	schema.validate(params).catch(err => errorUtil.badRequest(err.errors));
