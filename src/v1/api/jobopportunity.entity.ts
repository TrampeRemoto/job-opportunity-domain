import { Field, ObjectType } from "@nestjs/graphql";
import {
	BaseEntity,
	Column,
	Entity,
	Repository,
	ObjectIdColumn,
	ObjectID,
} from "typeorm";

@Entity("JobOpportunity")
@ObjectType()
export class JobOpportunity extends BaseEntity {
	@Field(() => String)
	@ObjectIdColumn({
		name: "_id",
	})
	public id: ObjectID;

	@Column()
	@Field()
	public userCreatorId: string;

	@Column()
	@Field()
	public companyName: string;

	@Column()
	@Field()
	public title: string;

	@Column()
	@Field()
	public description: string;

	@Column()
	@Field()
	public skills: Array<string>;

	@Column()
	@Field()
	public salary: number;

	@Column()
	@Field()
	public createdAt: number;

	@Column()
	@Field()
	public updatedAt: number;
}

export type JobRepository = Repository<JobOpportunity>;
