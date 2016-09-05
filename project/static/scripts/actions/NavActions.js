var AppDispatcher = require('../dispatcher/AppDispatcher');

var NavActions = {
  showView: function(type) {
    AppDispatcher.dispatch({
      actionType: "ViewShow",
      type: type
    });
  }
}


module.exports = NavActions;
