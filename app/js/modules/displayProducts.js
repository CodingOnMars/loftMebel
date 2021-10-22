import get from './getElement.js';
import { products } from '../local-data/products.js';

// Display products
const displayProducts = () => {
	const productsContainer = get('.sale-hits');

	const newProducts = products
		.map(product => {
			const {
				id,
				name,
				price,
				oldPrice,
				discountValue,
				category,
				dimensions: { width, depth, height },
				imgSrc,
			} = product;

			return `
      <div class="${
				discountValue === null
					? 'sale-hits__item'
					: 'sale-hits__item sale-hits__item--discount'
			}" data-id="${id}">
        <span class="sale-hits__discount">${
					discountValue === null ? '' : `-${discountValue}%`
				}</span>
        <div class="sale-hits__buttons">
          <button class="sale-hits__btn-top btn-reset" type="button" aria-label="Добавить в желаемое">
            <svg class="sale-hits__svg wishlist-icon">
              <use xlink:href="images/symbol/svg/sprite.symbol.svg#wishlist-icon"></use>
            </svg>
          </button>
          <button class="sale-hits__btn-top btn-reset" type="button" aria-label="Добавить в корзину">
            <svg class="sale-hits__svg wishlist-icon">
              <use xlink:href="images/symbol/svg/sprite.symbol.svg#bag-icon"></use>
            </svg>
          </button>
        </div>
        <a class="sale-hits__link" href="product-page.html">
          <img class="sale-hits__img" src="${imgSrc}" alt="Фотография мебели" width="200" height="150">
          <h3 class="sale-hits__title">${name}</h3>
          <p class="sale-hits__text">${category}</p>
          <span class="sale-hits__span">${price}₽</span>
          <span class="sale-hits__span sale-hits__span--line-through">${
						oldPrice === null ? '' : `${oldPrice}`
					}</span>
        </a>
        <div class="sale-hits__sizes sizes hidden">
          <p class="sizes__title">Размеры</p>
            <div class="sizes__items">
              <div class="sizes__item">
                <span class="sizes__subtitle">Ширина</span>
                <span class="sizes__value">${width}</span>
              </div>
              <div class="sizes__item sizes__item--pseudo">
                <span class="sizes__subtitle">Глубина</span>
                <span class="sizes__value">50 см</span>
              </div>
              <div class="sizes__item">
                <span class="sizes__subtitle">Высота</span>
                <span class="sizes__value">120 см</span>
              </div>
            </div>
        </div>
        <button class="sale-hits__btn action-btn btn-reset hidden">Добавить в корзину</button>
      </div>
      `;
		})
		.join('');
	productsContainer.innerHTML += newProducts;
};

export default displayProducts;
