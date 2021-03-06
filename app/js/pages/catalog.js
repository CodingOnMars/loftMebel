import displayMobileMenu from '../modules/burgerMenu.js';
import get from '../modules/getElement.js';
import { lockBody } from '../modules/lockBody.js';
import '../modules/rangeSlider.js';
import { showProducts } from '../modules/showProducts.js';

// Show burger menu
displayMobileMenu();

showProducts(0, 16);

// Show/hide filter list
const filterBtn = get('.sorting__filter-btn');
const closeFilterBtn = get('.catalog-top__btn');
const filters = get('.catalog__filters');

const toggleFilter = () => {
	filters.classList.toggle('catalog__filters--active');
	lockBody();
};

const displayFilterMenu = () => {
	filterBtn.addEventListener('click', toggleFilter);
	closeFilterBtn.addEventListener('click', toggleFilter);
};

displayFilterMenu();

// Show/hide sort options
const sortBtn = get('.sorting__sort-btn');
const sortList = get('.sorting__list');

sortBtn.addEventListener('click', () => {
	sortList.classList.toggle('sorting__list--active');
});
