const express = require("express");
const app = express();
const http = require("http");
require('dotenv').config();
const {connectDB} = require("./db/config.js")
connectDB();
const server = http.createServer(app);
const io = require("socket.io")(server);
app.use(express.json());
const bodyParser = require("body-parser");
const { saveToDb } = require("./model/save.js");
const getAllCrush = require("./model/getAllCrush.js");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
	res.sendFile(__dirname+"/index.html");
	console.log("Hit!");
	// setInterval(()=>{
	// 	io.emit("trialMsg","Trialing!!");
	// 	console.log("Dispatched")
	// },1000);
});

app.post("/api",async (req,res)=>{
	console.log(req.body.crush);
	const crushName = await saveToDb(req.body.crush);
	console.log("saved",crushName);
	io.emit("crushTime",crushName);
})

app.get("/all",async (req,res)=>{
	const allCrush = await getAllCrush();
	res.send(JSON.stringify(allCrush))
})

server.listen(3400,()=>console.log("Listening on port 3400"));
