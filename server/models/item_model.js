const db = require('../database/connect');

class Items {
	constructor({ item_Id, itemName, itemDescription }) {
		this.id = item_Id;
		this.name = itemName;
		this.description = itemDescription;
	}
	static async getAll() {
		const response = await db.query('SELECT * FROM recyclingObject;');
		if (response.rows.length === 0) {
			console.log('No current items');
		}
		return response.rows.map((item) => new Items(item));
	}

	static async getOneById(id) {
		const response = await db.query(
			'SELECT * FROM recyclingObject WHERE item_Id = $1;',
			[id]
		);
		if (response.rows.length != 1) {
			throw new Error('No current items');
		}
		return new Items(response.rows[0]);
	}

	static async create(data) {
		const { name, description } = data;
		let response = await db.query(
			'INSERT INTO recyclingObject (itemName, itemDescription) VALUES ($1, $2) RETURNING *;',
			[name, description]
		);
		console.log(response.rows[0]);
		const newItem = response.rows[0];
		console.log(newItem);
		return new Items(newItem);
	}

	async update(data) {
		const { name, description } = data;
		let response = await db.query(
			'UPDATE recyclingObject SET itemName = $1, itemDescription = $2 WHERE item_Id = $3 RETURNING *;',
			[name, description, this.id]
		);
		if (response.rows.length != 1) {
			throw new Error('Cannot update item');
		}
		const updatedItem = response.rows[0];
		return new Items(updatedItem);
	}

	async destroy() {
		const response = await db.query(
			'DELETE FROM recyclingObject WHERE item_Id = $1 RETURNING *;',
			[this.id]
		);
		return new Items(response.rows[0]);
	}
}

module.exports = Items;
