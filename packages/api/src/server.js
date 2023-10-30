const express = require("express");

const app = express();
const port = 3000;

const chechBody = "OK";

app.get("/check", async (req, res) => {
	return res.status(200).json({ status: chechBody });
});

const server = app.listen(port, () => {
	console.log(`La aplicación está escuchando en el puerto ${port}`);
});

module.exports = { app, server };


// nx 
// "targetDefaults": {
//   "test": {
//     "dependsOn": [
//       "^test"
//     ],
//     "cache": true
//   },
//   "lint": {
//     "dependsOn": [
//       "^lint"
//     ],
//     "cache": true
//   }
// },