import { ICartProductModel } from './icart-product-model'

export interface ICartModel {
    totalQty: number,
    totalPrice: number,
    products: ICartProductModel[],
    isVisiblePopover: boolean
}
