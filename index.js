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

app.get("/test.json", (req, res) => {
	let arr=[];
	let temp = fs.readFile("test.json", "utf-8", (err, result) => {
		let newArr=JSON.parse(result);
		res.end(JSON.stringify(newArr));
	});
})

// const XMLHttpRequest = require('xhr2');
// fs.readFile("dictionary.json", "utf-8", (err, result) => {
// 	let arr=[]
// 	let ogArr = JSON.parse(result);
// 	let keys= Object.keys(ogArr);
// 	for (let x=0; x<keys.length; x++) {
// 		if (keys[x].length==5) {
// 			arr[arr.length]=keys[x];
// 		}
// 	}
// 	fs.writeFile("dict5.json", JSON.stringify(arr), (err) => {console.log(err)});
// });
