const Token = require ("../models/token_model");

const authenticator = async(req,res,next)=>{
  try{
    const userToken = req.headers['authorization'];
    if (userToken == "MKTK"){
      const ID = await Token.findUserNameByToken(red.body.Username)
      const CreatedToken = await Token.create(ID);
      res.send(CreatedToken)
    }
    else if (!userToken == null) {
      const tokenChecker = await Token.GetTokenInfo(userToken);
      next()
    }
    else{
      console.log("Unable find userToken")
    }
  }
  catch{
    console.log("Unable to authenticate")
  }
}
module.exports = authenticator;