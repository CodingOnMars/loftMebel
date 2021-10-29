import displayMobileMenu from '../modules/burgerMenu.js';
import { showProducts } from '../modules/showProducts.js';
import { addToCart } from '../cart/addToCart.js';
import { counterAndItemRemover } from '../cart/counter.js';

showProducts(8, 12);

addToCart();

counterAndItemRemover();
