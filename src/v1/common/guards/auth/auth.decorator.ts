import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

// eslint-disable-next-line @typescript-eslint/naming-convention
export const User = () =>
	createParamDecorator((_, context: ExecutionContext) => {
		const ctx = GqlExecutionContext.create(context).getContext();

		return ctx.req.user;
	});
