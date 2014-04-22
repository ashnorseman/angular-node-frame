'use strict';

var index = require('./controllers'),
    users = require('./controllers/users'),
    menu = require('./controllers/menu')

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
//  app.route('/api/awesomeThings')
//    .get(api.awesomeThings);
//
//  app.route('/api/users')
//    .post(users.create)
//    .put(users.changePassword);
//  app.route('/api/users/me')
//    .get(users.me);
  app.route('/user/:name')
    .get(users.show);

  app.route('/menu')
    .get(menu.showAll);
//  app.route('/api/session')
//    .post(session.login)
//    .delete(session.logout);

  // All undefined api routes should return a 404
//  app.route('/api/*')
//    .get(function(req, res) {
//      res.send(404);
//    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/commons/*')
    .get(index.commons);
  app.route('/')
    .get(index.index);
};
