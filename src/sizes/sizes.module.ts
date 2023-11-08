import { Module } from "@nestjs/common";
import { SizesService } from "./sizes.service";
import { SizesController } from "./sizes.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Size, SizeSchema } from "./sizes.model";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Size.name, schema: SizeSchema }]),
    ],
    providers: [SizesService],
    controllers: [SizesController],
})
export class SizesModule {}
