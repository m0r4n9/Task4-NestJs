import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BrandDocument = HydratedDocument<Brand>;

@Schema()
export class Brand {
    @Prop()
    name: string;

    @Prop()
    foundation: number;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
