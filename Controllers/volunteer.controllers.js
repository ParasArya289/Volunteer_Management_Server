const { getVolunteer, createVolunteer,updateVolunteer,deleteVolunteer} = require("../Queries/volunteer.queries.js");

const getVolunteerController = async(req,res)=>{
  try{
    const volunteers = await getVolunteer();
    res.status(200).json({messsage:"Fetched Volunteers",volunteers})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const createVolunteerController = async(req,res)=>{
  const {body} = req;
  try{
    const volunteers = await createVolunteer(body);
    res.status(200).json({messsage:"Volunteer created",volunteers})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const deleteVolunteerController = async(req,res)=>{
  const {volunteerId} = req.params;
  try{
    const volunteers = await deleteVolunteer(volunteerId);
    res.status(200).json({messsage:"Volunteer deleted",volunteers})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const updateVolunteerController = async(req,res)=>{
  const {volunteerId} = req.params;
  const {body} = req;
  try{
    const volunteers = await updateVolunteer(volunteerId,body);
    res.status(200).json({messsage:"Volunteer updated",volunteers})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports = {getVolunteerController,createVolunteerController,deleteVolunteerController,updateVolunteerController};
