const User = require ("../models/user_model");

const create = async(req,res) =>{
  
    try{
      const createUser = await User.create(req.body.username,req.body.password);
      res.send(createUser).status()
    }
    catch{console.log("Unable to create new user")}
}

const userLogin = async(req,res)=>{
  try{
    const getLogin = await User.login(req.body.username,red.body.password);
    res.send(getLogin).status()
  }
  catch{e=>console.log(e);res.status(400)}
}

const Remove = async(req,res)=>{
  try{
    const getID = await User.getUserByID(req.body.name);
    const deleted = await User.destroy(getID);
    res.send(200)
  }
  catch{
    console.log("Unable to remove element")
  }
}