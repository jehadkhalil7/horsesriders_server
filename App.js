const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const USER_MODEL = require("./API/Models/user.model");
//  const Routs = require("./api/routes/Router");
const app = express();
app.use(express.json());
app.use(cors());


const mongooseURL = "mongodb+srv://jehadkhalil910:0522648594@cluster0.bxd7ptj.mongodb.net/"

mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
    console.log("mongo connected");
});


app.get("/app", (req, res) => {
    res.status(200).json({
        name: "Jehad",
        city: "Nazzareth",
    });
});


app.post("/watMyName", (req, res) => {
    const { name, lastName } = req.body;

    if (!name || !lastName) {
        res.status(703).json({
            error: true,
            errorMessage: "name and last name are MUST!",
        });
        return;
    }
    res.status(200).json({
        fullName: name + " " + lastName,
    });
});
module.exports = app