import get from '../modules/getElement.js';

// Gallery
const imgCover = get('.gallery__cover');
const img = document.querySelectorAll('.gallery__img');
const opacity = 1;

// Set opacity to 1 for the first image in preview block
img[0].style.opacity = opacity;

const selectImg = e => {
	// Reset opacity
	img.forEach(img => (img.style.opacity = 0.6));

	// Change current image to src of selected image
	imgCover.src = e.target.src;

	// Set opacity for active preview picture to 1
	e.target.style.opacity = opacity;
};

export default selectImg;
