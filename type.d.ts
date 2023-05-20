export interface Product {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    description: string;
    brand: string;
    category: string;
    image: string;
} 
[];
export interface Item{
    _id: number;
    title: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    brand: string;
    category: string;
}