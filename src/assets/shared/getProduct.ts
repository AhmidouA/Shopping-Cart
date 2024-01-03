import { CartItemType } from "./types";

export const getProducts = async (): Promise<CartItemType> => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data: CartItemType = await response.json();
    return data;
};
