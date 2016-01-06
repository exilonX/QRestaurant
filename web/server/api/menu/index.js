'use strict';

var express = require('express');
var controller = require('./menu.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/subcategory/:restaurant_id/:category', controller.showAllSubcategories);
router.get('/category/:restaurant_id', controller.showAllCategories);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
