
const Event = require("../Models/event.model.js");

const getEvents = async () => {
  try {
    const events = await Event.find().sort({_id: -1});
    return events;
  } catch (error) {
    throw new Error("Unable to fetch events")
  }
}

const createEvent = async (data) => {
  try {
    const newEvent = new Event(data)
    const savedEvent = await newEvent.save();
    return await getEvents();
  } catch (error) {
    throw error
  }
}

const deleteEvent = async (id) => {
  try {
    const savedEvent = await Event.findByIdAndDelete(id);
    if(!savedEvent){
      throw new Error("Event not found!!")
    }
    return await getEvents();
  } catch (error) {
    throw error
  }
}

const updateEvent = async (id,data) => {
  try {
    const savedEvent = await Event.findByIdAndUpdate(id,data);
    if(!savedEvent){
      throw new Error("Event not found!!")
    }
    return await getEvents();
  } catch (error) {
    throw error
  }
}


module.exports = { getEvents, createEvent,updateEvent,deleteEvent};