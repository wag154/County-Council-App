const { Router } = require('express');
const event_controller = require('../controllers/event_controller');

const eventRouter = Router();

eventRouter.get('/', event_controller.index);
eventRouter.post('/', event_controller.create);
eventRouter.get('/:id', event_controller.show);
eventRouter.patch('/:id', event_controller.update);
eventRouter.delete('/:id', event_controller.destroy);

module.exports = eventRouter;
