import express from "express";

const app = express();
const port = 3000;

const chechBody = "OK";

app.get("/check", (req, res) => {
	return res.status(200).json({ status: chechBody });
});

app.listen(port, () => {
	console.log(`La aplicación está escuchando en el puerto ${port}`);
});
