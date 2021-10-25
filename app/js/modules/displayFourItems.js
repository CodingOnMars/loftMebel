import { products } from '../local-data/products.js';
import displayProducts from './displayProducts.js';
import get from './getElement.js';

const showMoreBtn = get('.show-more');

let currentItems = 0;

export const displayFourItems = () => {
	displayProducts(products.slice(currentItems, currentItems + 4));
	if (!(currentItems + 4 > products.length)) {
		currentItems += 4;
	}
	// Hide 'Show more' button after all items are displayed
	if (currentItems === products.length) {
		showMoreBtn.removeEventListener('click', displayFourItems);
		showMoreBtn.style.display = 'none';
	}
};

export const clickShowMore = () => {
	showMoreBtn.addEventListener('click', displayFourItems);
};
