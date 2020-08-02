import { Category } from '../category.enum';

export interface IProductModel {
    id: string;
    name: string;
    imgSrc?: string;
    description?: string;
    price?: number;
    category: Category;
    isAvailabile: boolean;
    tags?: string[];
    stockQty: number;
}
