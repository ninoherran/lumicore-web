import {fetchApi} from "./fetchApi.js";

async function isInit(){
	const isInit = await fetchApi.get("/setup/is-init");

	return isInit.status === 200;
}

export const setupService = {
	isInit,
}