const {Router} = require ("express");
const event_controller = require ("../controllers/event_controller");

const eventRouter = Router();

// display all 
eventRouter.get("/",event_controller.index);
// create event
eventRouter.post("/create",event_controller.create);

//edit event
eventRouter.patch("/edit" , event_controller.fix);

//remove event
eventRouter.delete("/remove", eventRouter.destroy);

module.exports = eventRouter;