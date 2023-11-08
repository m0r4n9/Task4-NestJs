import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "./products.model";
import mongoose, { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    ) {}

    async performAggregationPipeline() {
        const pipeline = [
            {
                $lookup: {
                    from: "sizes",
                    localField: "_id",
                    foreignField: "productId",
                    as: "sizes",
                },
            },
            {
                $project: {
                    name: 1,
                    price: 1,
                    sizes: 1,
                },
            },
        ];

        const productInfo = await this.productModel.aggregate(pipeline);
        return productInfo;
    }

    async create(productDto: CreateProductDto) {
        const product = await this.productModel.create(productDto);
        return product;
    }

    async deleteProduct(productId: string) {
        const deleted = await this.productModel
            .findByIdAndRemove(productId)
            .exec();
        return deleted;
    }

    async updateProduct(productId: string, updateProductData: ProductDocument) {
        const updated = await this.productModel
            .findByIdAndUpdate(productId, updateProductData)
            .exec();
        return updated;
    }

    async getProductDetails(productId) {
        const product = await this.productModel.findById(productId);
        return product;
    }

    async getDetailsProduct(productId: string) {
        const pipeline = [
            {
              $match: {
                  _id: new mongoose.Types.ObjectId(productId)
              }
            },
            {
                $lookup: {
                    from: 'sizes',
                    localField: '_id',
                    foreignField: 'productId',
                    as: 'sizes'
                }
            }
        ];

        const productDetails = await this.productModel.aggregate(pipeline);
        return productDetails;
    }

    findAll() {
        return this.productModel.find();
    }

    async findProductByBrand(brandId: string) {
        const products = await this.productModel.find({ brandId });
        return products;
    }
}
