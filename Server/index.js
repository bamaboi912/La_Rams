const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);


app.use(express.json());
const cors = require("cors");

app.use(cors());

const router = require("./Routes/Roster-Routes");

app.use("/player", router)




mongoose.connect("mongodb+srv://bamaboi912:Student1234!@cluster0.yjjlgsl.mongodb.net/LA_Rams?retryWrites=true&w=majority").then(() => 
console.log("Connected to Database")).then(() =>{
    app.listen(3002)
}).catch((err) => console.log(err));