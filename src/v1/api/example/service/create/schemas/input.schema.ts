import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class V1CreateExampleInputSchema {
	@Field()
	public thisIsAnParam: string;
}
