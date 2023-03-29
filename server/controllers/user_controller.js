const User = require('../models/user_model');

const create = async (req, res) => {
	try {
		const createUser = await User.create(req.body.username, req.body.password);
		res.send(createUser).status();
	} catch {
		console.log('Unable to create new user');
	}
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
