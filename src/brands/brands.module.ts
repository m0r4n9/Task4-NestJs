import { Module } from "@nestjs/common";
import { BrandsController } from "./brands.controller";
import { BrandsService } from "./brands.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Brand, BrandSchema } from "./brands.model";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Brand.name, schema: BrandSchema }]),
    ],
    controllers: [BrandsController],
    providers: [BrandsService],
    exports: [BrandsService],
})
export class BrandsModule {}
