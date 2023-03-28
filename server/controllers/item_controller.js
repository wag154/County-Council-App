const Items = require('../models/item_model');

async function index(req, res) {
	try {
		const items = await Items.getAll();
		res.status(200).json(items);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

async function show(req, res) {
	try {
		const id = parseInt(req.params.id);
		const item = await Items.getOneById(id);
		res.status(200).json(item);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
}

async function create(req, res) {
	try {
		const data = req.body;
		const newItem = await Items.create(data);
		res.status(201).json(newItem);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

async function update(req, res) {
	try {
		const id = parseInt(req.params.id);
		const itemId = await Items.getOneById(id);
		const newItem = req.body;
		const result = await Items.update(data);
		res.status(200).json(result);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

async function destroy(req, res) {
	try {
		const id = parseInt(req.params.id);
		const item = await Items.getOneById(id);
		const result = await item.destroy(id);
		res.status(204).end();
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
}

module.exports = { index, show, create, update, destroy };
