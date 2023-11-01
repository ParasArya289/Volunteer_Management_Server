const { getEvents, createEvent,updateEvent,deleteEvent} = require("../Queries/event.queries.js");

const getEventsController = async(req,res)=>{
  try{
    const events = await getEvents();
    res.status(200).json({messsage:"Fetched Events",events})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const createEventController = async(req,res)=>{
  const {body} = req;
  try{
    const events = await createEvent(body);
    res.status(200).json({messsage:"Event created",events})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const deleteEventController = async(req,res)=>{
  const {eventId} = req.params;
  try{
    const events = await deleteVolunteer(eventId);
    res.status(200).json({messsage:"Event deleted",events})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const updateEventController = async(req,res)=>{
  const {eventId} = req.params;
  const {body} = req;
  try{
    const events = await updateEvent(eventId,body);
    res.status(200).json({messsage:"Event updated",events})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports = {getEventsController,createEventController,deleteEventController,updateEventController};
