import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SizesService } from "./sizes.service";
import { CreateSizeDto } from "./dto/create-size.dto";
import { SizeDocument } from "./sizes.model";

@Controller("sizes")
export class SizesController {
    constructor(private readonly sizeService: SizesService) {}

    @Post()
    create(@Body() data: CreateSizeDto) {
        return this.sizeService.create(data);
    }

    @Delete("/:id")
    deleteSize(@Param("id") sizeId: string) {
        return this.sizeService.deleteSize(sizeId);
    }

    @Put("/:id")
    updateSize(
        @Param("id") sizeId: string,
        @Body() updateSizeData: SizeDocument,
    ) {
        return this.sizeService.updateSize(sizeId, updateSizeData);
    }

    @Get()
    findAll() {
        return this.sizeService.findAll();
    }

    @Get("/:id")
    getSizesProduct(@Param("id") productId: string) {
        return this.sizeService.getSizesProduct(productId);
    }
}
