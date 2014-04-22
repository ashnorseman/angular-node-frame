'use strict';

var mongoose = require('mongoose'),
    Menu = mongoose.model('Menu');

/**
 *  Get Menu
 */
exports.showAll = function (req, res, next) {

  Menu.find({}, function (err, menus) {
    if (err) return next(err);
    if (!menus) return res.send(404);

    res.send(menus);
  });
};
