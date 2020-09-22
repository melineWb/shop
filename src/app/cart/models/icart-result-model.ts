import { ICartProductModel } from './icart-product-model';

export interface ICartResultModel {
    cartProducts: ICartProductModel[];
    removedProducts: ICartProductModel[];
    totalQuantity: number;
    totalSum: number;
    msg: string;
}
