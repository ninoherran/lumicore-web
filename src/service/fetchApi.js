const baseUrl = "http://localhost:5294"

async function get(uri){
	return fetch(baseUrl + uri, {method: 'GET'});
}

function post(uri, body){
	return fetch(uri, {method: 'post', body: JSON.stringify(body)});
}

export const fetchApi = {
	get,
	post,
}