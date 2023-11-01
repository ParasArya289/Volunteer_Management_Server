
const Volunteer = require("../Models/volunteer.model.js");

const getVolunteer = async () => {
  try {
    const volunteer = await Volunteer.find().sort({_id: -1});
    return volunteer;
  } catch (error) {
    throw new Error("Unable to fetch volunteer")
  }
}

const createVolunteer = async (data) => {
  try {
    const newVolunteer = new Volunteer(data)
    const savedVolunteer = await newVolunteer.save();
    return await getVolunteer();
  } catch (error) {
    throw error
  }
}

const deleteVolunteer = async (id) => {
  try {
    const savedVolunteer = await Volunteer.findByIdAndDelete(id);
    if(!savedVolunteer){
      throw new Error("Volunteer not found!!")
    }
    return await getVolunteer();
  } catch (error) {
    throw error
  }
}

const updateVolunteer = async (id,data) => {
  try {
    const savedVolunteer = await Volunteer.findByIdAndUpdate(id,data);
    if(!savedVolunteer){
      throw new Error("Volunteer not found!!")
    }
    return await getVolunteer();
  } catch (error) {
    throw error
  }
}


module.exports = { getVolunteer, createVolunteer,updateVolunteer,deleteVolunteer};