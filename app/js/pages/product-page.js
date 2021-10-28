import displayMobileMenu from '../modules/burgerMenu.js';
import {
	showFourProducts,
	showMoreProducts,
} from '../modules/showFourProducts.js';
import get from '../modules/getElement.js';
import selectImg from '../modules/selectImg.js';
import '../modules/changeSelectBackground.js';

// Show burger menu
displayMobileMenu();

// Show 4 items in sale-hits
showFourProducts();

// Display next 4 items when click on 'show-more' button
showMoreProducts();

const preview = get('.gallery__preview');

preview.addEventListener('click', selectImg);
