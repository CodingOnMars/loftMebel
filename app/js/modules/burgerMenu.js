import get from '../modules/getElement.js';
import { lockBody } from './lockBody.js';

// Open/close Burger menu
const menu = get('.menu');
const menuBurger = get('.menu-burger');
const menuBtn = get('.menu__btn');

const openMenu = () => {
	menu.classList.toggle('active');
	lockBody();
};

const displayMobileMenu = () => {
	menuBurger.addEventListener('click', openMenu);
	menuBtn.addEventListener('click', openMenu);
};

export default displayMobileMenu;
