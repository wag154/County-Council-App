const User = require ("../models/user_model");

const linkUserAndJob = async(req,res)=>{
  const getUserID = User.getUserByID(req.params.username);
  getUserID=parseInt(getUserID);
  const jobID = parseInt(req.params.jobid);
  const checker = User.InsertUserAndJobID(getUserID,jobID)
  res.send(checker)
}
const linkUserAndItem = async(req,res)=>{
  const getUserId = User.getUserByID(req.params.username);
  getUserId =parseInt(getUserId);
  const itemID = parseInt(req.params.itemid)
  const checker = User.insertUserAndItemID(getUserId,itemID)
  res.send(checker)
}


module.exports = {
linkUserAndJob,
linkUserAndItem
}