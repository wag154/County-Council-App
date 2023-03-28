const db = require ("../database/connect");

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
}

module.exports = Event;