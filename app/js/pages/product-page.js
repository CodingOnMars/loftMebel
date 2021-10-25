import displayMobileMenu from '../modules/burgerMenu.js';
import {
	displayFourItems,
	clickShowMore,
} from '../modules/displayFourItems.js';
import get from '../modules/getElement.js';
import selectImg from '../modules/selectImg.js';
import '../modules/changeSelectBackground.js';

// Show burger menu
displayMobileMenu();

// Show 4 items in sale-hits
displayFourItems();

// Display next 4 items when click on 'show-more' button
clickShowMore();

const preview = get('.gallery__preview');

preview.addEventListener('click', selectImg);
