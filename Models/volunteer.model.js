const mongoose = require("mongoose");
const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  skills: {
    type: [{ type: String }],
    required: true
  },
  availability: {
    type: Boolean,
    required: true
  },
  areasOfInterest: {
    type: [{ type: String }],
    required: true
  },
  contact: {
    type: String,
    required: true
  },
}, { timestamps: true })

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

module.exports = Volunteer;