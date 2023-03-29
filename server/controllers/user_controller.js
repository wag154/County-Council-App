const User = require('../models/user_model');

const userLogin = async (req, res) => {
	try {
		const getLogin = await User.login(req.body.Username, red.body.Password);
		res.send(getLogin).status(200);
	} catch(e) {
			
		res.json({message:e.message}).status(400);
	}
};
async function create(req, res) {
	try {
		const createUser = await User.create(req.body.Username, req.body.Password);
		res.send(createUser).status(200);
	} catch(e) {
		res.json({message : e.message}).status(404)
	}
}
async function remove(req, res) {
	try {
		const getID = await User.getUserByID(req.body.name);
		const deleted = await User.destroy(getID);
		res.send(200);
	} catch(e) {
		res.status(402).json({message: e.message})
	}
}

module.exports = { create, userLogin, remove };
