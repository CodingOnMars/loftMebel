import './modules/burgerMenu.js';

// Load more button
const showMoreBtn = document.querySelector('.show-more');
let currentItems = 4;
showMoreBtn.addEventListener('click', e => {
	const elementList = [
		...document.querySelectorAll('.sale-hits .sale-hits__item'),
	];
	for (let i = currentItems; i < currentItems + 4; i++) {
		if (elementList[i]) {
			elementList[i].classList.add('sale-hits__item--active');
		}
	}
	currentItems += 4;

	// Hide load more button after all items were loaded
	if (currentItems >= elementList.length) {
		e.target.style.display = 'none';
	}
});
