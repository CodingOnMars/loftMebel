import get from '../modules/getElement.js';

// DOM elements
const cartContainer = get('.cart__items');
const totalPriceHTML = get('.cart-checkout__total');

// Calc and display total price
export const showTotalPrice = () => {
	// Initial total price of products
	let totalPrice = 0;
	const priceItems = cartContainer.querySelectorAll('.cart-item__price');
	priceItems.forEach(item => {
		// Find amount of products
		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

		// Add product price to total price (amount * price)
		totalPrice += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});
	totalPriceHTML.innerText = totalPrice;
};
