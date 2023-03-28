const db = require('../database/connect');
class User {
	constructor({ userAccount_id, username, password }) {
		this.id = userAccount_id;
		this.username = username;
		this.password = password;
	}

	static async getUserByID(name) {
		try {
			const getID = await db.query(
				'SELECT UserAccount_id FROM UserAccount WHERE username = $1',
				[name]
			);
			return getID.rows[0];
		} catch {
			console.log('Unable to find id');
		}
	}

	static async check(name, password) {
		try {
			const UsernameCheck = db.query(
				"SELECT * FROM UserAccount WHERE username = '$1' AND password = '$2'",
				[name, password]
			);
			if (UsernameCheck.rows.length === 0) {
				return true;
			} else {
				return false;
			}
		} catch {
			console.log('Unable to check');
		}
	}

	static async create(name, password) {
		const isNewAccount = check(name, password);
		if (isNewAccount == true) {
			try {
				const add = await db.query(
					'INSERT INTO UserAccount VALUES ($1,$2) RETURNING *;',
					[name, password]
				);
				return add.rows.map((e) => User(e));
			} catch {
				console.log('Unable to create an account');
			}
		} else {
			console.log('Username already exists');
			return 'Already Exists';
		}
	}
	static async login(name, password) {
		try {
			const checker = db.query(
				'SELECT * FROM userAccount WHERE username = $1 AND password = $2 RETURNING *;',
				[name, password]
			);
			return add.rows.map((e) => User(e));
		} catch {
			console.log('Unable to check whether the user info is correct');
		}
	}
	async destroy(id) {
		try {
			const get = await db.query(
				'DELETE FROM userAccount WHERE UserAccount_id = $1 RETURNING *;',
				[id]
			);
		} catch {
			console.log('Unable to delete');
		}
	}
}
module.exports = User;
