import get from '../modules/getElement.js';

// DOM elements
const cartContainer = get('.cart__items');
const totalPriceHTML = get('.cart-checkout__total');
const totalItemsHTML = get('.cart__total-span');
const totalItemsIcon = get('.cart-btn__count');

// Calc and display total price
export const showTotalPrice = () => {
	// Initial total price of products
	let totalPrice = 0;
	// Initial total amount of products
	let totalItems = 0;
	const priceItems = cartContainer.querySelectorAll('.cart-item__price');
	priceItems.forEach(item => {
		// Find amount of products
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
		// Set totalItems equal to amount of products in the cart
		totalItems += parseInt(amountEl.innerText);
		// Add product price to total price (amount * price)
		totalPrice += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});
	// Show total price and total items
	totalPriceHTML.innerText = totalPrice;
	totalItemsHTML.innerText = totalItems;
	totalItemsIcon.innerText = totalItems;
};
