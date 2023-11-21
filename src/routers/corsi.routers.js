const express = require("express");
const router = express.Router();
const controllers = require("../controllers/corsi.controllers.js");

router.get("/", controllers.getCourses);

//router.post("/", controllers.addUCourse);

router.get("/:IDCorso", controllers.getCourse);

//router.put("/:IDCorso", controllers.updateUCourse);

//router.delete("/:IDCorso", controllers.deleteUCourse);

module.exports=router;