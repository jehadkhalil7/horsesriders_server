const { Router}= require("express");
const { login, createNewUser, getAllUsers } = require("../Controllers/user.controllers");

const userRouter = Router();

userRouter.post('/login' , login)
userRouter.post('/createNewUser' , createNewUser)
userRouter.post('/getAllUsers', getAllUsers)
module.exports = userRouter;