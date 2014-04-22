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

    res.send(menus.map(function (menu) {
      return menu.basicInfo;
    }));
  });
};

exports.openMenu = function (req, res, next) {
  var menuName = req.params.name;

  Menu.findOne({
    name: menuName
  }, function (err, menu) {
    if (err) return next(err);
    if (!menu) return res.send(404);

    res.send({
      showName: menu.showName,
      uri: menu.content.uri
    });
  });
};
