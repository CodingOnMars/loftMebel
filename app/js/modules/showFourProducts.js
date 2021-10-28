import { products } from './getProducts.js';
import { renderProducts } from './renderProducts.js';
import get from './getElement.js';

let currentItems = 0;
const showMoreBtn = get('.show-more');

export const showFourProducts = () => {
	renderProducts(products.slice(currentItems, currentItems + 4));
	if (currentItems + 4 <= products.length) {
		currentItems += 4;
	}
	// Remove event listener and
	// hide 'Show more' button after all items are displayed
	if (currentItems === products.length) {
		showMoreBtn.removeEventListener('click', showFourProducts);
		showMoreBtn.style.display = 'none';
	}
};

export const showMoreProducts = () => {
	showMoreBtn.addEventListener('click', showFourProducts);
};
