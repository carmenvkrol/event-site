var React = require('react');
var NavActions = require('../actions/NavActions');

var NavMobile = React.createClass({

  render: function() {
    return (
      <ul>
        <li onClick={this.changeView.bind(this, 'landing')}>
          Home
        </li>
        <li onClick={this.changeView.bind(this, 'general-info')}>
          Event
        </li>
        <li onClick={this.changeView.bind(this, 'rsvp')}>
          RSVP
        </li>
        <li onClick={this.changeView.bind(this, 'travel')}>
          Travel
        </li>
        <li onClick={this.changeView.bind(this, 'weekend-events')}>
          Weekend Events
        </li>
      </ul>
    )
  },
  changeView: function(section) {
    NavActions.showView(section);
  }

});

module.exports = NavMobile;
