import { ObjectID } from "mongodb";

export interface CreateDoc {
	id?: string;
	thisIsAnParam: string;
}

export const doc = ({ id, thisIsAnParam }: CreateDoc) => ({
	id: id || new ObjectID(),
	thisIsAnParam,
});
