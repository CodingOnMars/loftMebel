// Draft burger menu
const menuBurger = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__btn');

const openMenu = () => {
	menu.classList.toggle('active');
};

menuBurger.addEventListener('click', openMenu);
menuBtn.addEventListener('click', openMenu);

// Load more button
const loadMore = document.querySelector('.load-more');
let currentItems = 4;
loadMore.addEventListener('click', e => {
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
