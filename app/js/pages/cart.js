import displayMobileMenu from '../modules/burgerMenu.js';
import { products } from '../local-data/products.js';
import displayProducts from '../modules/displayProducts.js';

displayMobileMenu();
displayProducts(products.slice(8, 12));