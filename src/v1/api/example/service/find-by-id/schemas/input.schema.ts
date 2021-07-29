import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class V1FindByIdExampleInputSchema {
	@Field()
	public id: string;
}
