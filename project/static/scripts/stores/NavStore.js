var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery');


//***VARIABLES***//
var CHANGE_EVENT = "change";

var _view = 'landing';


//***STORE FUNCTIONS***//

var NavStore = assign({}, EventEmitter.prototype, {

  getView: function() {
    return _view;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

});


//***ACTIONS***//
AppDispatcher.register(function(action) {

  switch(action.actionType) {
    case "ViewShow":
      _view = action.type;
      NavStore.emitChange();
      break;
  }

});

module.exports = NavStore;
