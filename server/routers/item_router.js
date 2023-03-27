const {Router} = require ("express");
const item_controller = require ("../controllers/item_controller");

const itemRouter = Router();

itemRouter.get("/", event_controller.index);
itemRouter.get("/:id", event_controller.show);
itemRouter.post("/", event_controller.create);
itemRouter.patch("/:id", event_controller.update);
itemRouter.delete("/:id", event_controller.destroy);

module.exports = itemRouter;