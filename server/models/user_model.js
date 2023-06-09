const db = require('../database/connect');
class User {
	constructor({ userAccount_id, username, password }) {
		this.id = userAccount_id;
		this.username = username;
		this.password = password;
	}
	static async insertUserAndItemID(username,itemID){
		try{
			const NewInsert = await db.query("INSERT INTO UserActivity(userAccount_id,item_id)VALUES($1,$2)RETURNING * ;",[username,itemID])
			return NewInsert.rows[0]
		}
		catch{
			console.log("")
		}
	}
	static async InsertUserAndJobID(username,jobID){
		try{

			const Insert = await db.query("INSERT INTO UserActivity(userAccount_id,jobs_id) VALUES ($1,$2) RETURNING *;",[username,jobID])
			return Insert.rows[0];
		}
		catch{
			console.log("Unable to insert info")
		}
		}
		static async getUserByID(name) {
		const getID = await db.query(
			'SELECT UserAccount_id FROM UserAccount WHERE username = $1',
			[name]
		);
		return getID.rows[0];
	}

	static async check(name, password) {
		try{
			const UsernameCheck = await db.query(
				"SELECT * FROM UserAccount WHERE username = $1 AND password = $2",
				[name, password]
			);
			if (UsernameCheck.rows.length == 0) {
				return true;
			} else {
				return false;
			}
		}
		catch{
			console.log("Check not working")
		}
	}
	static async create(name, password) {
		console.log(name,password)
		try{
			const isNewAccount = await User.check(name, password);
			if (isNewAccount === true) {
				const add = await db.query(
					"INSERT INTO UserAccount(username,password) VALUES ($1,$2) RETURNING *;",[name, password]);
				return add.rows.map((e) => new User(e));
			} else {
				console.log('Username already exists');
				return 'Already Exists';
			}
		}
		catch(e){
			console.log("Unable to Create",e)
		}
	}
	static async login(name, password) {
		try{
			const checker = await db.query(
				'SELECT * FROM userAccount WHERE username = $1 AND password = $2 RETURNING *;',
				[name, password]
			);
			if (checker.rows.length == 0){
				return checker.rows[0];
			};
		}
		catch{
			throw error ("Unable to check login")
		}
	}

	async destroy(id) {
		const get = await db.query(
			'DELETE FROM userAccount WHERE UserAccount_id = $1 RETURNING *;',
			[id]
		);
	}
}
module.exports = User;
