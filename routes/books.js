const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authenticate = require('../middleware/authenticate');

router.use(authenticate);
router.post('/', bookController.create);
router.get('/', bookController.getAll);
router.get('/:id', bookController.getOne);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.delete);

module.exports = router;
