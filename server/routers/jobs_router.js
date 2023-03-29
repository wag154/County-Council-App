const { Router } = require('express');
const jobs_controller = require('../controllers/jobs_controller');

const jobRouter = Router();

jobRouter.get('/', jobs_controller.index);
jobRouter.post('/', jobs_controller.create);
jobRouter.get('/:id', jobs_controller.show);
jobRouter.patch('/:id', jobs_controller.update);
jobRouter.delete('/:id', jobs_controller.destroy);

module.exports = jobRouter;
