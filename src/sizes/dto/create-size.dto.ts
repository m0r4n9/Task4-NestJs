import { Product } from "../../products/products.model";

export class CreateSizeDto {
    readonly value: string;
    readonly quantity: string;
    readonly productId: Product;
}
