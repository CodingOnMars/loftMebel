const cartContainer = document.querySelector('.cart__items');

export const counterAndItemRemover = () => {
	cartContainer.addEventListener('click', e => {
		let counter;

		if (
			e.target.dataset.action === 'plus' ||
			e.target.dataset.action === 'minus'
		) {
			// Find counter container
			const counterWrapper = e.target.closest('.cart-item__counter');
			// Find counter span
			counter = counterWrapper.querySelector('.counter__value');
		}

		// Check if click was on plus button
		if (e.target.dataset.action === 'plus') {
			counter.innerText = ++counter.innerText;
		}
		// Check if click was on minus button
		if (e.target.dataset.action === 'minus') {
			// Decrease counter if value is greater than 1
			if (parseInt(counter.innerText) > 1) {
				counter.innerText = --counter.innerText;
			}
		}

		// Remove item from cart when click on remove button
		if (e.target.dataset.action === 'remove') {
			e.target.closest('.cart-item').remove();
		}
	});
};
