const { Router } = require('express');
const user_controller = require('../controllers/user_controller');
const activity_controller = require("../controllers/activity_controller")
const userRouter = Router();


 userRouter.get('/login/:username&:password', user_controller.userLogin);
 userRouter.post('/register', user_controller.create);
 userRouter.get("/linkJob/:username&:jobid",activity_controller.linkUserAndJob)
 userRouter.get("/linkItem/:username&:itemid",activity_controller.linkUserAndItem)
 userRouter.delete('/remove', user_controller.remove);
 module.exports = userRouter;
