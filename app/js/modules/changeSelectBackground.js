import get from '../modules/getElement.js';

const colorSelect = get('.color-select');

colorSelect.onchange = function () {
	colorSelect.className = this.options[this.selectedIndex].className;
};
