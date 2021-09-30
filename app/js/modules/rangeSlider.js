import get from '../modules/getElement.js';

const rangeSlider = get('#range-slider');
if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
		start: [500, 210000],
		connect: true,
		step: 500,
		range: {
			min: [500],
			max: [210000],
		},
	});

	const priceInput0 = get('#price-input-0');
	const priceInput1 = get('#price-input-1');
	const inputs = [priceInput0, priceInput1];

	rangeSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let values = [null, null];
		values[i] = value;
		rangeSlider.noUiSlider.set(values);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', e => {
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}
