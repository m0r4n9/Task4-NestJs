import {
    Body,
    Controller,
    Delete,
    Get,
    Put,
    Param,
    Post,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Product, ProductDocument } from "./products.model";

@Controller("products")
export class ProductsController {
    constructor(private readonly productService: ProductsService) {}

    // Create product
    @Post()
    create(@Body() data: Product) {
        return this.productService.create(data);
    }

    @Get("/details")
    performAggregationPipeline() {
        return this.productService.performAggregationPipeline();
    }

    @Get("/:id")
    getDetailsProduct(@Param("id") productId: string) {
        return this.productService.getDetailsProduct(productId);
    }

    // Delete product
    @Delete("/:id")
    deleteProduct(@Param("id") productId: string) {
        return this.productService.deleteProduct(productId);
    }

    @Put("/:id")
    updateProduct(
        @Param("id") productId: string,
        @Body() updateProductData: ProductDocument,
    ) {
        return this.productService.updateProduct(productId, updateProductData);
    }

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get("/:id")
    getProductDetails(@Param("id") productId: string) {
        return this.productService.getProductDetails(productId);
    }

    @Get("/:brandId")
    findProductByBrand(@Param("brandId") brandId: string) {
        return this.productService.findProductByBrand(brandId);
    }
}
