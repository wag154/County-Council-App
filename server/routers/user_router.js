const { Router } = require('express');
const user_controller = require('../controllers/user_controller');

const userRouter = Router();

//check user login return all about user
 userRouter.get('/login', user_controller.userLogin);
// //create new user account
 userRouter.post('/register', user_controller.create);
// //possible to create a delete function(not apart of mvp)
 userRouter.delete('/remove', user_controller.remove);
 module.exports = userRouter;
