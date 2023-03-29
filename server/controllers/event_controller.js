const Event = require('../models/event_model');

async function index(req, res) {
	try {
		const events = await Event.getAll();
		res.status(200).json(events);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

async function show(req, res) {
	try {
		const id = parseInt(req.params.id);
		const item = await Event.getOneById(id);
		res.status(200).json(item);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
}

async function create(req, res) {
	try {
		const data = req.body;
		const newEvent = await Event.create(data);
		res.status(201).json(newEvent);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

async function update(req, res) {
	try {
		const id = parseInt(req.params.id);
		const eventId = await Event.getOneById(id);
		const newEvent = req.body;
		const result = await eventId.update(newEvent);
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

async function destroy(req, res) {
	try {
		const id = parseInt(req.params.id);
		const event = await Event.getOneById(id);
		const getRemove = await event.destroy();
		res.status(204).end();
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
}
module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
