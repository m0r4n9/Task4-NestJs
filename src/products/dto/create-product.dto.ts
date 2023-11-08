import { Brand } from "../../brands/brands.model";

export class CreateProductDto {
    readonly name: string;
    readonly price: number;
    readonly brandId: Brand;
}
