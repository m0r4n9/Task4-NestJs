import { Injectable } from "@nestjs/common";
import { Brand, BrandDocument } from "./brands.model";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { CreateBrandDto } from "./dto/create-brand.dto";

@Injectable()
export class BrandsService {
    constructor(
        @InjectModel(Brand.name) private brandModel: Model<BrandDocument>,
    ) {}

    async create(dto: CreateBrandDto) {
        const brand = await this.brandModel.create(dto);
        return brand;
    }

    findAll() {
        return this.brandModel.find();
    }
}
