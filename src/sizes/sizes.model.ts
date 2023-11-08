import mongoose, { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Product } from "../products/products.model";

export type SizeDocument = HydratedDocument<Size>;

@Schema()
export class Size {
    @Prop({ required: true })
    value: string;

    @Prop({ required: false, default: 0 })
    quantity: number;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    })
    productId: Product;
}

export const SizeSchema = SchemaFactory.createForClass(Size);
