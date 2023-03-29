const db = require('../database/connect');

class Event {

  constructor(event_id, event_name, event_description,event_place,event_time){
    this.event_id = event_id;
    this.event_name = event_name;
    this.event_description = event_description;
    this.event_place = event_place;
    this.event_time = event_time;
  }
  static async getElementById (name){
  try{
    const ID = await db.query("SELECT event_id FROM Event WHERE event_title = $1",[name])
  }
  catch{
    console.log("Unable to get Event name by ID")
  }
  }
  static async index (){
    try{
      const All = await db.query("SELECT * FROM events;")
      if (All.rows.length === 0) {
        console.log("No events")
      } 
      return All.rows.map(e => new Event(e))
    }
    catch{
      console.log("Failed to return all from events table")
    }
  }
  static async GetEventID (name){
    try {
      const getID = await db.query("SELECT Event_id FROM Event WHERE Event_id = $1", [name])
      return getID.rows[0];
    }
    catch{
      console.log("Unable to return")
    }
  }
  static async create(name,description,place,time){
    try{
      const createNew = await db.query("INSERT INTO event VALUES($1,$2,$3,$4",[name,description,place,time])
    }
    catch{}
  }
  static async destroy(id){
    
  }

	constructor({
		events_id,
		event_name,
		event_description,
		event_place,
		event_time,
	}) {
		this.id = events_id;
		this.name = event_name;
		this.description = event_description;
		this.place = event_place;
		this.time = event_time;
	}
	static async getAll() {
		const response = await db.query('SELECT * FROM events;');
		if (response.rows.length === 0) {
			console.log('No events');
		}
		return response.rows.map((e) => new Event(e));
	}
	static async getOneById(id) {
		const response = await db.query(
			'SELECT * FROM events WHERE events_id = $1',
			[id]
		);
		if (response.rows.length != 1) {
			console.log('No event found');
		}
		return new Event(response.rows[0]);
	}
	static async create(data) {
		const { name, description, place, time } = data;
		const response = await db.query(
			'INSERT INTO events (event_name, event_description, event_place, event_time) VALUES ($1, $2, $3, $4) RETURNING *;',
			[name, description, place, time]
		);
		const newEvent = response.rows[0];
		return new Event(newEvent);
	}

	async update(data) {
		const { name, description, place, time } = data;
		let response = await db.query(
			'UPDATE events SET event_name = $1, event_description = $2, event_place = $3, event_time = $4 WHERE events_id = $5 RETURNING *;',
			[name, description, place, time, this.id]
		);
		if (response.rows.length != 1) {
			throw new Error('Cannot update event');
		}
		const updatedEvent = response.rows[0];
		return new Event(updatedEvent);
	}

	async destroy() {
		const response = await db.query(
			'DELETE FROM events WHERE events_id = $1 RETURNING *;',
			[this.id]
		);
		return new Event(response.rows[0]);
	}
}

module.exports = Event;
