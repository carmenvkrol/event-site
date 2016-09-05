jest.dontMock('../RSVPStore');
jest.dontMock('object-assign');

describe('RSVPStore', function() {
  var AppDispatcher;
  var RSVPStore;
  var callback;

  //***ACTIONS***//
  var actionAttendSet = {
    actionType: 'AttendSet',
    bool: true
  };
  var actionFormClean = {
    actionType: 'FormClean'
  };
  var actionNameAdd = {
    actionType: 'NameAdd',
    type: 'firstName',
    data: 'Jane'
  };
  var actionSubmit = {
    actionType: 'Submit'
  };

  beforeEach(function(){
    AppDispatcher = require('../../dispatcher/AppDispatcher');
    RSVPStore = require('../RSVPStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(callback.length).toBe(1);
  });

  it('AttendSet action sets _RSVPForm.attend', function() {
    var result;

    callback(actionAttendSet);

    result = RSVPStore.getRSVPForm();

    expect(result).toEqual({
      firstName: null,
      lastName: null,
      attend: true
    });

    actionAttendSet.bool = false;

    callback(actionAttendSet);

    result = RSVPStore.getRSVPForm();

    expect(result).toEqual({
      firstName: null,
      lastName: null,
      attend: false
    });
  });

  it('FormClean action disables _RSVPForm and _RSVPSubmitStatus', function() {
    var resultForm;
    var resultSubmitStatus;

    //enabling _RSVPForm with these actions
    callback(actionAttendSet);
    callback(actionNameAdd);
    callback(actionSubmit);
    callback(actionFormClean);

    resultForm = RSVPStore.getRSVPForm();
    resultSubmitStatus = RSVPStore.getRSVPSubmitStatus();

    expect(resultForm).toEqual({
      firstName: null,
      lastName: null,
      attend: null
    });

    expect(resultSubmitStatus).toEqual(null);
  });

  it('NameAdd actions adds value to _RSVPForm object', function() {
    var result;

    callback(actionNameAdd);

    result = RSVPStore.getRSVPForm();

    expect(result).toEqual({
      firstName: 'Jane',
      lastName: null,
      attend: null
    });

    actionNameAdd.type = 'lastName';
    actionNameAdd.data = 'Doe';

    callback(actionNameAdd);

    result = RSVPStore.getRSVPForm();

    expect(result).toEqual({
      firstName: 'Jane',
      lastName: 'Doe',
      attend: null
    });
  });

  it('Submit action calls writeDB method', function() {
    var result;

    callback(actionSubmit);

    result = RSVPStore.getRSVPSubmitStatus();

    expect(result).toEqual('loading');
  });

  it('RSVPStore.getRSVPForm() returns _RSVPForm', function() {
    var result = RSVPStore.getRSVPForm();

    expect(result).toEqual({
      firstName: null,
      lastName: null,
      attend: null
    })
  });

  it('RSVPStore.getRSVPSubmitStatus returns _RSVPSubmitStatus', function() {
    var result = RSVPStore.getRSVPSubmitStatus();

    expect(result).toEqual(null);
  });
});
