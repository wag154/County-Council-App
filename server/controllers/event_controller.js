const Event = require ("../models/event_model");

const index = async(req,res) =>{
  try{
    const allEvents = await Event.index;
    res.json(allEvents).status(200);
  }
  catch{
    console.log("unable to get all from event table");
    res.status(204);
  }
}
module.exports = {
  getAll,

}