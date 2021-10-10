import displayMobileMenu from '../modules/burgerMenu.js';
import get from '../modules/getElement.js';
import selectImg from '../modules/selectImg.js';
import '../modules/changeSelectBackground.js';
import '../modules/loadMore.js';

displayMobileMenu();

const preview = get('.gallery__preview');

preview.addEventListener('click', selectImg);
