const db = require('../database/connect');

class Items {
	constructor({ item_id, itemname, itemdescription }) {
		this.id = item_id;
		this.name = itemname;
		this.description = itemdescription;
	}
	static async getAll() {
		const response = await db.query('SELECT * FROM recyclingObject;');
		if (response.rows.length === 0) {
			console.log('No current items');
		}
		const mapped = response.rows.map((item) => new Items(item));
		return mapped;
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
		try {
			let response = await db.query(
				'INSERT INTO recyclingObject (itemName, itemDescription) VALUES ($1, $2) RETURNING *;',
				[name, description]
			);
			const newItem = response.rows[0];
			return new Items(response.rows[0]);
		} catch (error) {
			throw new Error('Cannot create item');
		}
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
