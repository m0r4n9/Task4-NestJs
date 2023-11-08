import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product } from "./products.model";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    @Post()
    create(@Body() data: Product) {
        return this.productService.create(data);
    }


    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get("/:brandId")
    findProductByBrand(@Param("brandId") brandId: string) {
        return this.productService.findProductByBrand(brandId);
    }
}
