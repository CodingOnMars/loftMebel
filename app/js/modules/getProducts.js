// Use this only for production build to avoid conflicts with webpack
// import 'regenerator-runtime/runtime';

const fetchProducts = async URL => {
	try {
		const response = await fetch(URL);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const localURL = '../../js/local-data/products.json';

export const products = await fetchProducts(localURL);
