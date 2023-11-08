import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Brand } from "../brands/brands.model";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    price: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Brand" })
    brandId: Brand;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
