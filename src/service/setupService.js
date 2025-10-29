import {fetchApi} from "./fetchApi.js";

async function isInit() {
	const isInit = await fetchApi.get("/setup/is-init");

	return isInit.status === 200;
}

async function setup(companyName, email, firstName, lastName, password) {
	const response = await fetchApi.post("/setup", {companyName, email, firstName, lastName, password});

	return response.json();
}

export const setupService = {
	isInit,
	setup
}