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

// app.use(express.favicon(path.join(__dirname,'favicon.ico'))); 

app.get("/wordList.json", (req, res) => {
	let arr=[];
	let temp = fs.readFile("wordList.json", "utf-8", (err, result) => {
		let newArr=JSON.parse(result);
		res.end(JSON.stringify(newArr));
	});
})


// Gamer Function vvvv

// const requestIp = require('request-ip');
// const ipMiddleware = function(req, res, next) {
//     const clientIp = requestIp.getClientIp(req); 
//     next();
// };
// app.use(requestIp.mw())
// app.use(function(req, res) {
//     const ip = req.clientIp;
//     console.log(ip);
//     res.end(ip);
// });