import displayMobileMenu from '../modules/burgerMenu.js';
import get from '../modules/getElement.js';
import selectImg from '../modules/selectImg.js';
import '../modules/changeSelectBackground.js';
import { products } from '../local-data/products.js';
import displayProducts from '../modules/displayProducts.js';
import '../modules/loadMore.js';

displayMobileMenu();
displayProducts(products);

const preview = get('.gallery__preview');

preview.addEventListener('click', selectImg);
