import 'whatwg-fetch';

const mapAPI = {
	fetchCategories() {
		return fetch('/api/categories')
    .then((response) => response.json());
	},

	fetchLocations(origin) {
		return fetch(`/api/locations/${origin}`)
    .then((response) => response.json());
	},

	fetchDescriptions(origin) {
		return fetch(`/api/descriptions/${origin}`)
    .then((response) => response.json());
	}
	
};

export default mapAPI;
