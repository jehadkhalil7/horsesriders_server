const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const Routs = require("./API/Routes/Routes");
const app = express();
app.use(express.json());
app.use(cors());


const mongooseURL = "mongodb+srv://jehadkhalil910:0522648594@cluster0.bxd7ptj.mongodb.net/"

mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
    console.log("mongo connected");
});

app.use(Routs)

module.exports = app