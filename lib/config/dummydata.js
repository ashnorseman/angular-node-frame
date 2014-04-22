'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Menu = mongoose.model('Menu');

/**
 * Populate database with sample application data
 */

// Menus
Menu.find({}).remove(function () {
  Menu.create([
    {
      name: "employees",
      showName: "Employees",
      content: {
        uri: "/employees"
      }
    },
    {
      name: "time",
      showName: "Time",
      content: {
        uri: "/time"
      }
    },
    {
      name: "todo",
      showName: "Todo List",
      content: {
        uri: "/todo"
      }
    }
  ]);
});

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    name: 'ash',
    firstName: 'Ash',
    lastName: 'Norseman'
  });
});
