const { Router } = require('express');
const item_controller = require('../controllers/item_controller');
const middleWare = require('../middleware/authenticator');

const itemRouter = Router();

itemRouter.get('/', item_controller.index);
itemRouter.post('/', item_controller.create);
itemRouter.get('/:id', item_controller.show);
itemRouter.patch('/:id', item_controller.update);
itemRouter.delete('/:id', item_controller.destroy);

module.exports = itemRouter;
