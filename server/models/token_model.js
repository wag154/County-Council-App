const {v4 :uuidv4} = require ("uuid");
const db = require ("../database/connect");

class Token {
  constructor({token_id,user_id,Token}){
    this.token_id = token_id;
    this.user_id = user_id;
    this.Token = Token;
  }
  static async create(user_id){
    const token = uuidv4();
    const resp = await db.query("INSERT INTO token(token,user_id) VALUES ($1,$2)",[token,user_id])
    const ID = resp.rows[0].token_id;
    const newToken = await Token.GetTokenInfo(ID);
    return newToken
  }
  static async findUserNameByToken(token){
    const resp = await db.query("SELECT UserAccount_id FROM UserAccount as u JOIN token t ON u.UserAccount_id = t.token_id WHERE t.token = $1",[token])
    if (resp.rows.length == 1){
      return new Token(resp.rows[0])
    }
    else {
      console.log("Unable to find token")
    }
  }
  static async GetTokenInfo(id){
    const resp =await  db.query("SELECT * FROM token WHERE token_id =$1",[id])
    if (resp.rows.length = 1){
      return new Token(resp.rows[0])
    } 
    else {
      throw new Error("Unable to find exact token");
    }
  }
  static async getByToken(token){
    const resp = await db.query("SELECT * FROM token WHERE token = $1",[token])
    if (resp.rows.length = 1){
      return new Token(resp.rows[0])
    }
    else {
      throw new Error ("Unable to use token to find info")
    }
  }
  static async remove (token){
    try{
      const resp = await db.query("DELETE FROM token WHERE token = $1",[token])
      return new Token (resp.rows[0]);

    }catch{
      console.log("Unable to locate token")
    }
  }
  static async findID (token){
    const resp = await db.query("SELECT UserAccount_id FROM UserAccount AS user JOIN token t ON token_id = UserAccount_id WHERE t.token = $1",[token])
    return (resp.rows[0])
  }
}

module.exports = Token;