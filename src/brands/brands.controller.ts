import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from "@nestjs/common";
import { BrandsService } from "./brands.service";
import { CreateBrandDto } from "./dto/create-brand.dto";
import { BrandDocument } from "./brands.model";

@Controller("brands")
export class BrandsController {
    constructor(private readonly brandService: BrandsService) {}

    @Get("/details")
    performAggregationPipeline() {
        return this.brandService.performAggregationPipeline();
    }

    // Create brand
    @Post()
    create(@Body() data: CreateBrandDto) {
        return this.brandService.create(data);
    }

    // Delete brand
    @Delete("/:id")
    deleteBrand(@Param("brandId") brandId: string) {
        return this.brandService.deleteBrand(brandId);
    }

    // Update brand
    @Put(":id")
    updateBrand(
        @Param("id") brandId: string,
        @Body() updateBrandDto: BrandDocument,
    ) {
        return this.brandService.updateBrand(brandId, updateBrandDto);
    }

    // Get brands
    @Get()
    findAll() {
        return this.brandService.findAll();
    }
}
