const {Router} = require ("express");
const jobs_controller = require ("../controllers/jobs_controller");

const jobRouter = Router();

jobRouter.get("/", jobs_controller.index);
jobRouter.get("/:id", jobs_controller.show);
jobRouter.post("/", jobs_controller.create);
jobRouter.patch("/:id", jobs_controller.update);
jobRouter.delete("/:id", jobs_controller.destroy);

module.exports = jobRouter;
