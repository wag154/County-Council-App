const { Router } = require('express');
const event_controller = require('../controllers/event_controller');

const eventRouter = Router();

eventRouter.get('/', event_controller.index);
eventRouter.post('/create', event_controller.create);
// eventRouter.patch('/edit', event_controller.fix);
// eventRouter.delete('/remove', event_controller.destroy);

module.exports = eventRouter;
