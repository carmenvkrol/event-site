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
        Desktop Version
        <Landing />
        <GeneralInfo />
        <RSVP />
        <Travel />
        <WeekendEvents />
      </div>
    )
  }

});

module.exports = DesktopContainer;
