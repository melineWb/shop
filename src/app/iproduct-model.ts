import { Category } from './category.enum';

export interface IProductModel {
    name: string;
    imgSrc?: string;
    description?: string;
    price?: number;
    category: Category;
    isAvailabile: boolean;
    tags?: string[];
    availableQuantity: number;
}
