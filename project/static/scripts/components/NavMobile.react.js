var React = require('react');
var NavActions = require('../actions/NavActions');

var NavMobile = React.createClass({

  render: function() {
    return (
      <ul className="nav-mobile">
        <li className="nav-mobile__close-link" onClick={this.props.clickHandler}>
          X
        </li>
        <li className="nav-mobile__link" onClick={this.changeView.bind(this, 'landing')}>
          Home
        </li>
        <li className="nav-mobile__link" onClick={this.changeView.bind(this, 'general-info')}>
          Event
        </li>
        <li className="nav-mobile__link" onClick={this.changeView.bind(this, 'rsvp')}>
          RSVP
        </li>
        <li className="nav-mobile__link" onClick={this.changeView.bind(this, 'travel')}>
          Travel
        </li>
        <li className="nav-mobile__link" onClick={this.changeView.bind(this, 'weekend-events')}>
          Weekend Events
        </li>
      </ul>
    )
  },
  changeView: function(section) {
    this.props.clickHandler();
    NavActions.showView(section);
  }

});

module.exports = NavMobile;
