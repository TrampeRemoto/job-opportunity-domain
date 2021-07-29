import { Field, ObjectType } from "@nestjs/graphql";
import {
	BaseEntity,
	Column,
	Entity,
	Repository,
	ObjectIdColumn,
	ObjectID,
} from "typeorm";

@Entity("example")
@ObjectType()
export class ExampleEntity extends BaseEntity {
	@Field(() => String)
	@ObjectIdColumn({
		name: "_id",
	})
	public id: ObjectID;

	@Column()
	@Field()
	public thisIsAnParam: string;
}

export type ExampleRepository = Repository<ExampleEntity>;
