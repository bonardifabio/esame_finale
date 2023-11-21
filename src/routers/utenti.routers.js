const express = require("express");
const router = express.Router();
const controllers = require("../controllers/utenti.controllers.js");

router.get("/", controllers.getUsers);

router.post("/", controllers.addUser);

router.get("/:IDUtente", controllers.getUser);

router.put("/:IDUtente", controllers.updateUser);

router.delete("/:IDUtente", controllers.deleteUser);

module.exports=router;