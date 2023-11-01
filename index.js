const express = require("express");
const cors = require("cors");
const volunteerManagament = require("./Routers/volunteer.router.js")
const eventRouter = require("./Routers/event.router.js")
require("./mongodb")

const app = express();
app.use(cors());
app.use(express.json())
app.use("/volunteer", volunteerManagament)
app.use("/event", eventRouter)

app.get("/", (req, res) => {
  res.send("Volunteer Management")
})

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Something Went wrong!!" })
})

app.use((req, res) => {
  res.status(404).json({ error: "Requested API endpoint does not exist" })
})

app.listen(3000, () => {
  console.log("Server started")
})   