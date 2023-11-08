import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "./products.model";
import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) {}

    async create(productDto: CreateProductDto) {
        const product = await this.productModel.create(productDto);
        return product;
    }

    findAll() {
        return this.productModel.find();
    }

    async findProductByBrand(brandId: string) {
        const products = await this.productModel.find({brandId});
        return products;
    }
}
