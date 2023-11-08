import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Size, SizeDocument } from "./sizes.model";
import { Model } from "mongoose";
import { CreateSizeDto } from "./dto/create-size.dto";

@Injectable()
export class SizesService {
    constructor(
        @InjectModel(Size.name) private sizeModel: Model<SizeDocument>,
    ) {}

    async create(sizeDto: CreateSizeDto) {
        const size = await this.sizeModel.create(sizeDto);
        return size;
    }

    async deleteSize(sizeId: string) {
        const deleted = await this.sizeModel.findByIdAndRemove(sizeId).exec();
        return deleted;
    }

    async updateSize(sizeId: string, updateSizeData: SizeDocument) {
        const size = await this.sizeModel
            .findByIdAndUpdate(sizeId, updateSizeData)
            .exec();
        return size;
    }

    async findAll() {
        const sizes = await this.sizeModel.find();
        return sizes;
    }

    async getSizesProduct(productId) {
        const sizes = await this.sizeModel.find({ productId });
        return sizes;
    }
}
