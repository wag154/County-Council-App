const db = require ("../database/connect");

class Event {
  constructor(event_id, event_name, event_description,event_place,event_time){
    this.event_id = event_id;
    this.event_name = event_name;
    this.event_description = event_description;
    this.event_place = event_place;
    this.event_time = event_time;
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
}

module.exports = Event;