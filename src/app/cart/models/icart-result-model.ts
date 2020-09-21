import { ICartProductModel } from './icart-product-model';

export interface ICartResultModel {
    cartProducts: ICartProductModel[];
    totalQuantity: number;
    totalSum: number;
    msg: string;
}
