const express = require("express");
const volunteerRouter = express.Router();
const {getVolunteerController,createVolunteerController,deleteVolunteerController,updateVolunteerController} = require("../Controllers/volunteer.controllers.js");

volunteerRouter.get("/",getVolunteerController)

volunteerRouter.post("/",createVolunteerController)
volunteerRouter.post("/update/:volunteerId",updateVolunteerController)

volunteerRouter.delete("/delete/:volunteerId",deleteVolunteerController)

module.exports = volunteerRouter;