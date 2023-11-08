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

    async performAggregationPipeline() {
        const pipeline = [
            {
                $lookup: {
                    from: "products",
                    localField: "_id",
                    foreignField: "brandId",
                    as: "products",
                },
            },
            {
                $project: {
                    name: 1,
                    productCount: { $size: "$products" },
                },
            },
        ];

        const brandInfo = await this.brandModel.aggregate(pipeline);
        return brandInfo;
    }

    async create(dto: CreateBrandDto) {
        const brand = await this.brandModel.create(dto);
        return brand;
    }

    async deleteBrand(brandId: string) {
        const deleted = await this.brandModel.findByIdAndRemove(brandId).exec();
        return deleted;
    }

    async updateBrand(brandId: string, updateBrandDto: BrandDocument) {
        const updatedBrand = await this.brandModel.findByIdAndUpdate(
            brandId,
            updateBrandDto,
            {
                new: true,
            },
        );
        return updatedBrand;
    }

    findAll() {
        return this.brandModel.find();
    }
}
