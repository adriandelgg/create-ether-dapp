import Joi from "joi";
import mongoose from "mongoose";

export interface IMetadata {
	name: string;
	description: string;
	image: string;
	date: string;
}

export function validateNFT(metadata: IMetadata) {
	const schema = Joi.object({
		name: Joi.string().trim().min(2).max(50).required(),
		description: Joi.string().trim().max(1000).required(),
		image: Joi.string().trim().max(100).required(),
		date: Joi.string().required()
	});

	return schema.validate(metadata);
}

export const NFT = mongoose.model<IMetadata>(
	"NFTs",
	new mongoose.Schema({
		name: { type: String, minlength: 2, maxlength: 50, required: true },
		description: { type: String, maxlength: 1000, required: true },
		image: { type: String, maxlength: 100, required: true },
		date: { type: String, required: true, unique: true }
	})
);
