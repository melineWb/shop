import { ICartProductModel } from '../../cart/models/icart-product-model';

export interface IOrderModel {
    id?: number;
    username: any;
    phone: any;
    address: {
        country: any;
        city: any;
        street: any;
        appartments: any;
    };
    paymentType: string;
    paymentComplete: boolean;
    products: ICartProductModel[];
    totalPrice: number;
    closed: boolean;
}
