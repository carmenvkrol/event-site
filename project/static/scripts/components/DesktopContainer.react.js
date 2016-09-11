var React = require('react');
var GeneralInfo = require('./GeneralInfo.react');
var Landing = require('./Landing.react');
var RSVP = require('./RSVP.react');
var Travel = require('./Travel.react');
var WeekendEvents = require('./WeekendEvents.react');

var DesktopContainer = React.createClass({

  render: function() {
    return (
      <div>
        <Landing />
        <GeneralInfo />
        <RSVP />
        <Travel />
        <WeekendEvents />
        <footer>Carmen V. Krol &copy; Copyright 2016</footer>
      </div>
    )
  }

});

module.exports = DesktopContainer;
