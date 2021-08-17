// Draft burger menu
const menuBurger = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu__btn');

const openMenu = () => {
	menu.classList.toggle('active');
};

menuBurger.addEventListener('click', openMenu);
menuBtn.addEventListener('click', openMenu);
