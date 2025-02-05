const express = require('express');
const router = express.Router();
const userController = require('../controllers/useController');

router.get('/', userController.getUsers);
router.post('/add-user', userController.addUser);

module.exports = router;
