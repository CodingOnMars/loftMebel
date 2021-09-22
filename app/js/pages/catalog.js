import '../modules/burgerMenu.js';
import get from '../modules/getElement.js';

// Draft show/hide filter list
const filterBtn = get('.sorting__filter-btn');
const filters = get('.catalog__filters');

filterBtn.addEventListener('click', () => {
	filters.classList.toggle('catalog__filters--active');
});

// Draft Show/hide sort options
const sortBtn = get('.sorting__sort-btn');
const sortList = get('.sorting__list');

sortBtn.addEventListener('click', () => {
	sortList.classList.toggle('sorting__list--active');
});
