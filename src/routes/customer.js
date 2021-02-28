const express = require('express');
const router = express.Router();
const controllers = require('../controllers/customerController');

router.get('/', controllers.list)

router.post('/add', controllers.save)

router.get('/delete/:ID', controllers.delete)

router.get('/update/:ID', controllers.update)

router.post('/update/:ID', controllers.saveUpdate)

module.exports = router;