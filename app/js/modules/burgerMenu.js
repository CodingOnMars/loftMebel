import get from '../modules/getElement.js';

// Open/close Burger menu
const menu = get('.menu');
const body = get('body');
const menuBurger = get('.menu-burger');
const menuBtn = get('.menu__btn');

const openMenu = () => {
	menu.classList.toggle('active');
	body.classList.toggle('lock');
};

menuBurger.addEventListener('click', openMenu);
menuBtn.addEventListener('click', openMenu);
