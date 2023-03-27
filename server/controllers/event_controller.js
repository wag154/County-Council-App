const Event = require('../models/event_model');

const index = async (req, res) => {
	try {
		const allEvents = await Event.index;
		res.json(allEvents).status(200);
	} catch {
		console.log('unable to get all from event table');
		res.status(204);
	}
};

const create = async (req, res) => {
	try {
		const getCreate = await Event.create(req.body.username, red.body.password);
		res.send('Created a new account');
	} catch {
		console.log('Unable to create account');
	}
};

const remove = async (req, res) => {
	try {
		const getRemove = await Event.destroy();
	} catch {
		console.log();
	}
};
module.exports = {
	index,
	create,
	// fix,
	// destroy,
	// remove,
};
