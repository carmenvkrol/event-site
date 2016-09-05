jest.dontMock('../NavStore');
jest.dontMock('object-assign');

describe('NavStore', function() {
  var AppDispatcher;
  var NavStore;
  var callback;

  var actionViewShow = {
    actionType: 'ViewShow',
    type: 'general-info'
  };

  beforeEach(function(){
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    NavStore = require('../NavStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(callback.length).toBe(1);
  });

  it('NavStore.getView() should return value sent with ViewShow action', function() {
    var result = NavStore.getView();

    expect(result).toEqual('landing');

    callback(actionViewShow);

    result = NavStore.getView();

    expect(result).toEqual('general-info');
  });
});
