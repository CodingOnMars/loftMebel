import '../modules/burgerMenu.js';
import get from '../modules/getElement.js';
import '../modules/rangeSlider.js';

// Show/hide filter list
const filterBtn = get('.sorting__filter-btn');
const closeFilterBtn = get('.catalog-top__btn');
const filters = get('.catalog__filters');
const body = get('body');

filterBtn.addEventListener('click', () => {
	filters.classList.add('catalog__filters--active');
	body.classList.add('lock');
});

closeFilterBtn.addEventListener('click', () => {
	filters.classList.remove('catalog__filters--active');
	body.classList.remove('lock');
});

// Show/hide sort options
const sortBtn = get('.sorting__sort-btn');
const sortList = get('.sorting__list');

sortBtn.addEventListener('click', () => {
	sortList.classList.toggle('sorting__list--active');
});
