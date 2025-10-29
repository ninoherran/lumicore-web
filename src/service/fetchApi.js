const baseUrl = "http://localhost:5294"

async function get(uri){
	return fetch(baseUrl + uri, {method: 'GET'});
}

export const fetchApi = {
	get
}