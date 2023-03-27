const db = require ("../database/connect");

class Items {
  constructor(Item_Id,ItemName,ItemDescription){
    this.Item_Id = Item_Id;
    this.ItemName = ItemName;
    this.ItemDescription = ItemDescription;
  }
  static async getAll () {
      const response = await db.query('SELECT * FROM recyclingObject')
      if(response.rows.length === 0){
        console.log("No current items")
      }
      return response.rows.map(item => new Items(item))
    }

    static async getOneById (id) {
      const response = await db.query('SELECT * FROM recyclingObject WHERE Item_Id = $1',[id])
      if(response.rows.length != 1){
        console.log("No current items")
      }
      return new Items(response.rows[0])
    }

  static async create (data) {
    const {itemName, itemDescription} = data;
    let response = await db.query('INSERT INTO recyclingObject (ItemName, ItemDescription) VALUES ($1, $2) RETURNING *', [itemName, itemDescription])
  }

  async update (id, data) {
    let response = await db.query('UPDATE recyclingObject SET ItemName = $1, ItemDescription = $2 WHERE Item_Id = $3 RETURNING *', [itemName, itemDescription, this.id]);
    if(response.rows.length!= 1){
      throw new Error('Cannot update item')
    }
    const updatedItem = response.rows[0];
    return new Items(updatedItem)
}


}

module.exports = Items;