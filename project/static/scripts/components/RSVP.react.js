var React = require('react');
var classNames = require('classnames');

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
    var firstNameClasses = classNames({
      'rsvp__first-name-input': true,
      'rsvp__error-input': firstNameError
    });
    var lastNameError = this.checkIncomplete('lastName');
    var lastNameClasses = classNames({
      'rsvp__last-name-input': true,
      'rsvp__error-input': lastNameError
    });
    var attendError = this.checkIncomplete('attend');
    var attendClasses = classNames({
      'rsvp__checkbox-container': true,
      'rsvp__error-attend': attendError
    });

    if (status === null || status === 'loading' || status === 'error') {

    return (
      <div id="rsvp" className="rsvp">
        <h1 className="rsvp__header">RSVP</h1>
        <div className="rsvp__container">
          <p className="rsvp__sub-header">Please fill out the following form for your RSVP.<br /><span className="rsvp__underline">This form should be filled out for <strong>each</strong> guest.</span></p>
          {status === 'error' ? <p className="rsvp__error">There was an error in processing your form.  Please try again or email carmenvkrol@gmail.com with your RSVP. </p> : null}
          {complete === false ? <p className="rsvp__error">Please provide missing information and submit again.</p> : null}
          <div>
            <input
              className={firstNameClasses}
              name='firstName'
              type='text'
              value={this.state.firstName}
              onChange={this._onChange}
              onFocus={this._onFocus}
              onBlur={this._onBlur}
            />
            <input
              className={lastNameClasses}
              name='lastName'
              type='text'
              value={this.state.lastName}
              onChange={this._onChange}
              onFocus={this._onFocus}
              onBlur={this._onBlur}
            />
          </div>
          <div className={attendClasses}>
            <div className="rsvp__checkbox-wording">Will you be attending?</div>
            <div className="rsvp__checkbox-action-container">
              <label className="rsvp__checkbox-label">
                Yes
              </label>
              <label>
                <input
                  name='yes'
                  type='checkbox'
                  checked={yesAttend}
                  className='rsvp__checkbox'
                  onClick={this.setAttend}
                />
                <span className="rsvp__checkbox-visible">
                </span>
              </label>
              <label className="rsvp__checkbox-label">
                No
              </label>
              <label>
                <input
                  name='no'
                  type='checkbox'
                  checked={noAttend}
                  className='rsvp__checkbox'
                  onClick={this.setAttend}
                />
                <span className="rsvp__checkbox-visible">
                </span>
              </label>
            </div>
          </div>
          <button className="rsvp__button" onClick={this.submit}>
            Submit
          </button>
        </div>
      </div>
    )

    } else if (status === 'done') {
      return (
        <div className="rsvp">
          <div className="rsvp__container-done">
            <p>Thank you! Your RSVP has been recorded.</p>
            <button className="rsvp__button" onClick={this.cleanForm}>Submit Another RSVP</button>
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
