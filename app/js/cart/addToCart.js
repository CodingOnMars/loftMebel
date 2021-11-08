import { productsContainer } from '../modules/renderProducts.js';
import { showTotalPrice } from './calcPrice.js';

const cartContainer = document.querySelector('.cart__items');

export const addToCart = () => {
	productsContainer.addEventListener('click', e => {
		// Check if cart icon or 'Add to cart' button were clicked
		if (e.target.hasAttribute('data-cart-button')) {
			// Find a product card where click was made
			const card = e.target.closest('.sale-hits__item');

			// Get data from the product card
			const productData = {
				id: card.dataset.id,
				name: card.querySelector('.sale-hits__title').innerText,
				imgSrc: card.querySelector('.sale-hits__img').src,
				price: card.querySelector('.sale-hits__price').innerText,
				oldPrice: card.querySelector('.sale-hits__old-price').innerText,
				discount: card.querySelector('.sale-hits__discount').innerText,
				width: card.querySelector('.sizes__width').innerText,
				depth: card.querySelector('.sizes__depth').innerText,
				height: card.querySelector('.sizes__height').innerText,
				count: 1,
			};

			// Check if the same item is already in cart
			const cartItem = cartContainer.querySelector(
				`[data-id="${productData.id}"]`
			);

			const priceHTML = `
      <p class="cart-item__price">${productData.price}</p>
      `;

			const priceDiscountHTML = `
      <div class="cart-item__discount cart-discount">
        <svg class="cart-discount__svg discount-svg" width="20" height="20">
          <use xlink:href="images/symbol/svg/sprite.symbol.svg#sale-icon"></use>
        </svg>
        <p class="cart-discount__value">${
					productData.discount !== '' ? productData.discount : ''
				}</p>
        <p class="cart-discount__old-price">${
					productData.oldPrice !== '' ? productData.oldPrice : ''
				}</p>
        <p class="cart-discount__price cart-item__price">${
					productData.price
				}</p>
      </div>
      `;

			if (cartItem) {
				const counterEl = cartItem.querySelector('[data-counter]');
				counterEl.innerText =
					parseInt(counterEl.innerText) + parseInt(productData.count);
			} else {
				// Add item to cart
				const cartItemHTML = `
        <div class="cart__item cart-item" data-id="${productData.id}">
            <div class="cart-item__container">
              <div class="cart-item__picture">
                <img class="cart-item__img" src="${
									productData.imgSrc
								}" alt="Товар, добавленный в корзину"
                width="100" height="75">
              </div>
              <div class="cart-item__inner">
                  <div class="cart-item__top">
                    <p class="cart-item__name">${productData.name}</p>
                    ${
											productData.discount && productData.oldPrice !== ''
												? priceDiscountHTML
												: priceHTML
										}
                  </div>
                  <div class="cart-item__bottom">
                    <div class="cart-item__options">
                      <span class="cart-item__name">Цвет:</span>
                      <span class="cart-item__value">Желтый</span>
                      <span class="cart-item__color cart-item__color--yellow"></span>
                    </div>
                    <div class="cart-item__options">
                      <span class="cart-item__name">Количество:</span>
                      <div class="cart-item__counter counter">
                        <button class="counter__btn btn-reset" data-action="minus">−</button>
                        <span class="counter__value" data-counter="">${
													productData.count
												}</span>
                        <button class="counter__btn btn-reset" data-action="plus">+</button>
                      </div>
                    </div>
                    <div class="cart-item__options">
                    <span class="cart-item__name">Размер(Ш×Д×В):</span>
                    <span class="cart-item__value">${productData.width} СМ × ${
					productData.depth
				} СМ × ${productData.height} СМ</span>
                    </div>
                  </div>
                </div>
            </div>
              <button class="cart-item__btn btn-reset" type="button" data-action="remove">
                <svg class="cart-item__svg" width="12" height="12">
                  <use xlink:href="images/symbol/svg/sprite.symbol.svg#close-cross-catalog">
                  </use>
                </svg>
              </button>
          </div>
        `;

				cartContainer.innerHTML += cartItemHTML;
			}
		}
		showTotalPrice();
	});
};
