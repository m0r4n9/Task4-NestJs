import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BrandsController } from './brands/brands.controller';
import { BrandsModule } from './brands/brands.module';
import { ProductsModule } from './products/products.module';
import { SizesModule } from './sizes/sizes.module';

@Module({
    imports: [
        MongooseModule.forRoot(
            "mongodb+srv://SashaSev:Tulege91@task4.xnshivw.mongodb.net/?retryWrites=true&w=majority",
        ),
        BrandsModule,
        ProductsModule,
        SizesModule,
    ],
    controllers: [BrandsController],
    providers: [],
})
export class AppModule {}
