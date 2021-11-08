import displayMobileMenu from '../modules/burgerMenu.js';
import { showProducts } from '../modules/showProducts.js';
import { addToCart } from '../cart/addToCart.js';
import { counterAndItemRemover } from '../cart/counter.js';

// Burger menu functionality
displayMobileMenu();

// Show 4 product items
showProducts(8, 12);

// Add ans show item in cart
addToCart();

// Increase/decrease amount of items. Remove items from cart
counterAndItemRemover();
