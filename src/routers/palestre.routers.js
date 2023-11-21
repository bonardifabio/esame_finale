const express = require("express");
const router = express.Router();
const controllers = require("../controllers/palestre.controllers.js");

router.get("/", controllers.getGyms);

//router.post("/", controllers.addGym);

router.get("/:IDPalestra", controllers.getGym);

//router.put("/:IDGym", controllers.updateGym);

//router.delete("/:IDGym", controllers.deleteGym);

module.exports=router;