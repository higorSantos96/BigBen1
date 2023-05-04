const express = require('express');
const router = express.Router();
const itemPedidoController = require('../controllers/itemPedidoController');

router.get('/', itemPedidoController.findAll);
router.get('/:id', itemPedidoController.findOne);
router.post('/', itemPedidoController.create);
router.put('/:id', itemPedidoController.update);
router.delete('/:id', itemPedidoController.delete);

module.exports = router;