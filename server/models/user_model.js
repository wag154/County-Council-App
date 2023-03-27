const db = require ("../database/connect");
class User {
  constructor(UserAccount_id,username,password){
    this.UserAccount_id = UserAccount_id;
    this.username = username;
    this.password = password;
  }
  static async check (name,password){
    try{
      const UsernameCheck = db.query("SELECT * FROM UserAccount WHERE username = '$1' AND password = '$2'",[name,password]);
      if (UsernameCheck.rows === 0){
        return true;
      }
      else {
        return false;
      }
    }
    catch {
      console.log("Unable to check")
    }
  }

  static async create (name,password){
    
    const isNewAccount = check(name,password);
    
    if (isNewAccount == true){
    
      try{
    
        const add = await db.query ("INSERT INTO UserAccount VALUES ($1,$2) RETURNING *;",[name,password])
    
        return add.rows.map(e => User(e));
  
      }
  
      catch {
        console.log("Unable to create an account")
      }
    }
    else {
      console.log("Username already exists")
      return "Already Exists"
    }
  }
  static async login (name,password){
    try{
      const checker = db.query("SELECT * FROM UserAccount WHERE username = $1 AND password = $2 RETURNING *;",[name,password])
      return add.rows.map(e => User(e))
    }
    catch {
      console.log("Unable to check whether the user info is correct")
    }
  }
 }

module.exports = User;