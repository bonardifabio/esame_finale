const express = require("express");
const router = express.Router();
const controllers = require("../controllers/prenotazioni.controllers.js");

router.get("/", controllers.getBookings);

router.post("/", controllers.addBooking);

router.get("/:IDPrenotazione", controllers.getBooking);

//router.put("/:IDPrenotazione", controllers.updateBooking);

router.delete("/:IDPrenotazione", controllers.deleteBooking);

module.exports=router;