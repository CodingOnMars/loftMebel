import { products } from './getProducts.js';
import { renderProducts } from './renderProducts.js';

export const showProducts = (start, end) => {
	renderProducts(products.slice(start, end));
};
