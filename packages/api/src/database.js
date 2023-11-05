const fs = require("fs").promises;

const loadData = async () => {
	try {
		const dataBuffer = await fs.readFile("database.json", "utf-8");
		console.log(dataBuffer);
		return JSON.parse(dataBuffer);
	} catch (error) {
		console.error(error);
		return { data: [] };
	}
};

const loadById = async (id) => {
	try {
		const dataBuffer = await fs.readFile("database.json", "utf-8");
		const jsonData = JSON.parse(dataBuffer);
		console.log(jsonData);
		const result = jsonData.data.find((item) => item === id);
		if (result) {
			console.log(result);
			return {
				status: "OK",
				data: result,
			};
		}
		return {
			status: "Not Found",
		};
	} catch (error) {
		console.error(error);
		throw new Error(`Error searching data. Error:${error}`);
	}
};

const saveData = async (newItem) => {
	try {
		const data = await loadData();
		data.data.push(newItem);
		const dataJSON = JSON.stringify(data);
		await fs.writeFile("database.json", dataJSON);
		return {
			status: "OK",
			savedData: newItem,
		};
	} catch (error) {
		console.error(error);
		throw new Error(`Error saving data. Error:${error}`);
	}
};

const deleteData = async (itemToDelete) => {
	try {
		const data = await loadData();
		const filteredURLs = data.data.filter((item) => item !== itemToDelete);
		data.urls = filteredURLs;
		// await saveData(data);
		const dataJSON = JSON.stringify(data);
		await fs.writeFile("database.json", dataJSON);
		return {
			status: "OK",
			deletedItem: itemToDelete,
		};
	} catch (error) {
		console.error(error);
		throw new Error(`Error deleting data. Error:${error}`);
	}
};

const deleteAll = async () => {
	try {
		const data = { data: [] };
		const dataJSON = JSON.stringify(data);
		await fs.writeFile("database.json", dataJSON);
		return {
			status: "OK",
		};
	} catch (error) {
		console.error(error);
		throw new Error(`Error deleting data. Error:${error}`);
	}
};


// example purpose only
// const main = async () => {
// 	try {
// 		await saveData("data1");
// 		await saveData("data2");
// 		await saveData("data3");
// 		await deleteAll();
// 		await loadById("");
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

// main();
module.exports = { loadData, saveData, deleteData, deleteAll, loadById };
