const db = require ("../database/connect");
class User {
  constructor(UserAccount_id,username,password){
    this.UserAccount_id = UserAccount_id;
    this.username = username;
    this.password = password;
  }

 }

module.exports = User;