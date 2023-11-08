import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { BrandsService } from "./brands.service";
import { Brand } from "./brands.model";

@Controller("brands")
export class BrandsController {
    constructor(private readonly brandService: BrandsService) {}

    @Post()
    create(@Body() data: Brand) {
        return this.brandService.create(data);
    }

    @Get()
    findAll() {
        return this.brandService.findAll();
    }
}
