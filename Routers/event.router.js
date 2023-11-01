const express = require("express");
const eventRouter = express.Router();
const {getEventsController,createEventController,deleteEventController,updateEventController} = require("../Controllers/event.controllers.js");

eventRouter.get("/",getEventsController)

eventRouter.post("/",createEventController)
eventRouter.post("/update/:eventId",updateEventController)

eventRouter.delete("/delete/:eventId",deleteEventController)

module.exports = eventRouter;