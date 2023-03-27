const db = require ("../database/connect");

class Items {
  constructor(Item_Id,ItemName,ItemDescription){
    this.Item_Id = Item_Id;
    this.ItemName = ItemName;
    this.ItemDescription = ItemDescription;
  }
  static async getAllUserId(){
    
  }
  static async index () {
    try{
      const all = await db.query("SELECT * FROM recyclingObject WHERE user_id = '';")
      if(all.rows.length === 0){
        console.log("No current items")
      }
    }
    catch{
      console.log("Cannot get database")
    }
    
    return all.rows.map(e => Items(e))
  }
  static async create (name,desc) {
    try{
      const add = await db.query("INSERT INTO recyclingObject VALUES ($1,$2) RETURNING *;",[name,desc]);
      return add.rows[0]
    }
    catch{
      console.log("Cannot execute query")
    }
  }
}
module.exports = Items;