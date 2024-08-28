const express = require("express");

const route = express.Router();

const {mainController, createController} = require("../controller/mainController")
const readController = require("../controller/readController")
const {editController, updateController, deleteController} = require("../controller/editController")
const viewController = require("../controller/viewController")

route.get("/", mainController )
route.post("/", createController)
route.get("/read", readController)
route.get("/edit/:id", editController)
route.post("/update/:id", updateController)
route.get("/delete/:id", deleteController)
route.get("/view/:id", viewController)


module.exports = route;
