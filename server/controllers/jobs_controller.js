const Jobs = require('../models/jobs_model');

async function index(req, res) {
	try {
		const jobs = await Jobs.getAll();
		res.status(200).json(jobs);
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
}

async function show(req, res) {
	try {
		const id = parseInt(req.params.id);
		const item = await Jobs.getOneById(id);
		res.status(200).json(item);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
}

async function create(req, res) {
	try {
		const data = req.body;
		const newItem = await Jobs.create(data);
		res.status(201).json(newItem);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
}

async function update(req, res) {
	try {
		const id = parseInt(req.params.id);
		const jobId = await Jobs.getOneById(id);
		const newJob = req.body;
		const result = await jobId.update(newJob);
		res.status(201).json(result);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
}

async function destroy(req, res) {
	try {
		const id = parseInt(req.params.id);
		const job = await Jobs.getOneById(id);
		const result = await job.destroy(id);
		res.status(204).end();
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
}

module.exports = { index, show, create, update, destroy };
