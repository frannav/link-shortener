// import { promises as fs } from "fs";
const fs = require("fs").promises;

const loadData = async () => {
	try {
		const dataBuffer = await fs.readFile("database.json", "utf-8");
		return JSON.parse(dataBuffer);
	} catch (error) {
		return { urls: [] };
	}
};

const saveData = async (data) => {
	try {
		const dataJSON = JSON.stringify(data);
		await fs.writeFile("database.json", dataJSON);
	} catch (error) {
		throw new Error("No se pudo guardar los datos");
	}
};

const addURL = async (newURL) => {
	const data = await loadData();
	data.urls.push(newURL);
	await saveData(data);
};

// example purpose only
// const main = async () => {
// 	try {
// 		await addURL("ola1");
// 		await addURL("ola2");
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

// main();
module.exports = { loadData, saveData, addURL };