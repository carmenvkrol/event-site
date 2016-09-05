var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var $ = require('jquery');

//***VARIABLES***//

var CHANGE_EVENT = "change";

var _RSVPForm = {
  firstName: null,
  lastName: null,
  attend: null
}

var _RSVPSubmitStatus = null;


//***STORE FUNCTIONS***//

var RSVPStore = assign({}, EventEmitter.prototype, {

  getRSVPForm: function() {
    return _RSVPForm;
  },

  getRSVPSubmitStatus: function() {
    return _RSVPSubmitStatus;
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
    case "AttendSet":
      _RSVPForm.attend = action.bool;
      break;
    case "FormClean":
      _RSVPSubmitStatus = null;
      for (key in _RSVPForm) {
        _RSVPForm[key] = null;
      }
      RSVPStore.emitChange();
      break;
    case "NameAdd":
      _RSVPForm[action.type] = action.data;
      break;
    case "Submit":
      writeDB();
      break;

  }

});

//***HELPER FUNCTIONS***//

function writeDB() {
  _RSVPSubmitStatus = 'loading';
  RSVPStore.emitChange();

  //TODO: set up api
  $.ajax({
    url: '/rsvp',
    method: 'post',
    dataType: 'json',
    data: JSON.stringify(_RSVPForm),
    success: success,
    error: error
  });
  function success() {
    _RSVPSubmitStatus = 'done';
    RSVPStore.emitChange();
  }
  function error() {
    _RSVPSubmitStatus = 'error';
    RSVPStore.emitChange();
  }
}

module.exports = RSVPStore;
