const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");
app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/", (req, res) => {
	res.sendFile(__dirname+"/index.html");
});

app.use('/favicon.ico', express.static('/favicon.ico'));

app.get("/wordList.json", (req, res) => {
	let arr=[];
	let temp = fs.readFile("wordList.json", "utf-8", (err, result) => {
		let newArr=JSON.parse(result);
		res.end(JSON.stringify(newArr));
	});
})