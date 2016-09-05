var React = require('react');

var RSVPActions = require('../actions/RSVPActions');

var RSVPStore = require('../stores/RSVPStore');

var oldValues = {
  firstName: null,
  lastName: null
}

var RSVP = React.createClass({

  getInitialState: function() {
    return {
      firstName: 'First Name',
      lastName: 'Last Name',
      attend: null,
      complete: null,
      status: RSVPStore.getRSVPSubmitStatus()
    }
  },

  componentDidMount: function() {
    RSVPStore.addChangeListener(this.checkStatus);
  },

  componentWillUnmount: function() {
    RSVPStore.removeChangeListener(this.checkStatus);
  },

  render: function() {
    var yesAttend = this.state.attend;
    var noAttend = this.state.attend === false;
    var firstName = this.state.firstName;
    var lastName = this.state.lastName;
    var complete = this.state.complete;
    var status = this.state.status;
    var firstNameError = this.checkIncomplete('firstName');
    var lastNameError = this.checkIncomplete('lastName');
    var attendError = this.checkIncomplete('attend');

    if (status === null || status === 'loading' || status === 'error') {

    return (
      <div>
        <h1>RSVP</h1>
        <div>
          <p>Please fill out the following form for your RSVP.<br /><span>This form should be filled out for <strong>each</strong> guest.</span></p>
          {status === 'error' ? <p>There was an error in processing your form.  Please try again or email carmenvkrol@gmail.com with your RSVP. </p> : null}
          {complete === false ? <p>Please provide missing information and submit again.</p> : null}
          <div>
            <input
              name='firstName'
              type='text'
              value={this.state.firstName}
              onChange={this._onChange}
              onFocus={this._onFocus}
              onBlur={this._onBlur}
            />
            <input
              name='lastName'
              type='text'
              value={this.state.lastName}
              onChange={this._onChange}
              onFocus={this._onFocus}
              onBlur={this._onBlur}
            />
          </div>
          <div>
            <div>Will you be attending?</div>
            <div>
              <label>
                Yes
              </label>
              <label>
                <input
                  name='yes'
                  type='checkbox'
                  checked={yesAttend}
                  onClick={this.setAttend}
                />
                <span>
                </span>
              </label>
              <label>
                No
              </label>
              <label>
                <input
                  name='no'
                  type='checkbox'
                  checked={noAttend}
                  onClick={this.setAttend}
                />
                <span>
                </span>
              </label>
            </div>
          </div>
          <button onClick={this.submit}>
            Submit
          </button>
        </div>
      </div>
    )

    } else if (status === 'done') {
      return (
        <div>
          <div>
            <p>Thank you! Your RSVP has been recorded.</p>
            <button onClick={this.cleanForm}>Submit Another RSVP</button>
          </div>
        </div>
      )
    }
  },

  checkIncomplete: function(inputType) {
    var attend = this.state.attend;
    var firstName = this.state.firstName;
    var lastName = this.state.lastName;
    var complete = this.state.complete;

    switch(inputType) {
      case 'firstName':
        return (firstName === 'First Name' || !firstName) && complete === false;
      case 'lastName':
        return (lastName === 'Last Name' || !lastName) && complete === false;
      case 'attend':
        return attend === null && complete === false;
    }
  },

  checkStatus: function() {
    this.setState({
      status: RSVPStore.getRSVPSubmitStatus()
    });
  },

  cleanForm: function(e) {
    e.preventDefault();
    RSVPActions.cleanForm();
    this.setState({
      firstName: null,
      lastName: null,
      attend: null,
      complete: null,
      status: null,
    });
  },

  _onBlur: function(e) {
    if (e.target.name === 'firstName') {
      if (this.state.firstName === '' && oldValues.firstName) {
        this.setState({firstName: oldValues.firstName});
      } else {
        this.setState({firstName: e.target.value});
        RSVPActions.addName('firstName', e.target.value);
      }
    } else if (e.target.name === 'lastName') {
      if (this.state.lastName === '' && oldValues.lastName) {
        this.setState({lastName: oldValues.lastName});
      } else {
        this.setState({lastName: e.target.value});
        RSVPActions.addName('lastName', e.target.value);
      }
    }
  },

  _onChange: function(e) {
    if (e.target.name === 'firstName') {
      this.setState({firstName: e.target.value});
    } else if (e.target.name === 'lastName') {
      this.setState({lastName: e.target.value});
    }
  },

  _onFocus: function(e) {
    if (e.target.name === 'firstName') {
      oldValues.firstName = e.target.value;
      if (this.state.firstName === 'First Name') {
        this.setState({firstName: ''});
      }
    } else if (e.target.name === 'lastName') {
      oldValues.lastName = e.target.value;
      if (this.state.lastName === 'Last Name') {
        this.setState({lastName: ''});
      }
    }
  },

  setAttend: function(e) {
    if (e.target.name === 'yes') {
      this.setState({attend: true});
      RSVPActions.setAttend(true);
    } else if (e.target.name === 'no') {
      this.setState({attend: false});
      RSVPActions.setAttend(false);
    }
  },

  submit: function() {
    formComplete = !this.checkIncomplete('firstName') && !this.checkIncomplete('lastName') && !this.checkIncomplete('attend');

    if (formComplete) {
      this.setState({complete: null});
      RSVPActions.submit();
    } else {
      this.setState({complete: false});
    }
  }

});

module.exports = RSVP;
