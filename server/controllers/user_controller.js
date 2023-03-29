const User = require('../models/user_model');

<<<<<<< HEAD
const userLogin = async(req,res)=>{
  try{
    const getLogin = await User.login(req.body.username,red.body.password);
    res.send(getLogin).status()
  }
  catch{e=>console.log(e);res.status(400)}
}
async function create(req, res) {
=======
const create = async (req, res) => {
>>>>>>> 2a206a1383aafcba71bff384016a15e2e30f1ee8
	try {
		const createUser = await User.create(req.body.username, req.body.password);
		res.send(createUser).status();
	} catch {
		console.log('Unable to create new user');
	}
<<<<<<< HEAD
}
async function remove(req, res) {
	try {
		const getID = await User.getUserByID(req.body.name);
		const deleted = await User.destroy(getID);
		res.send(200);
	} catch {
		res.status (402)
		console.log('Unable to remove element');
	}
}

module.exports = { create, userLogin, remove };
=======
};

const userLogin = async (req, res) => {
	try {
		const getLogin = await User.login(req.body.username, req.body.password);
		res.send(getLogin).status();
	} catch {
		(e) => console.log(e);
		res.status(400);
	}
};

module.exports = { create, userLogin };
>>>>>>> 2a206a1383aafcba71bff384016a15e2e30f1ee8
