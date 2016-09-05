var AppDispatcher = require('../dispatcher/AppDispatcher');

var RSVPActions = {
  addName: function(type, data) {
    AppDispatcher.dispatch({
      actionType: "NameAdd",
      type: type,
      data: data
    });
  },
  cleanForm: function() {
    AppDispatcher.dispatch({
      actionType: "FormClean"
    });
  },
  setAttend: function(bool) {
    AppDispatcher.dispatch({
      actionType: 'AttendSet',
      bool: bool
    });
  },
  submit: function(){
    AppDispatcher.dispatch({
      actionType: 'Submit'
    });
  }
}


module.exports = RSVPActions;
