import '../modules/burgerMenu.js';
import get from '../modules/getElement.js';
import selectImg from '../modules/selectImg.js';

const preview = get('.gallery__preview');

preview.addEventListener('click', selectImg);
