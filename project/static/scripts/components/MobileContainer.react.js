var React = require('react');
var GeneralInfo = require('./GeneralInfo.react');
var Landing = require('./Landing.react');
var NavMobile = require('./NavMobile.react');
var RSVP = require('./RSVP.react');
var Travel = require('./Travel.react');
var WeekendEvents = require('./WeekendEvents.react');

var MobileContainer = React.createClass({

getInitialState: function() {
    return {
      menuActive: false
    }
  },

  render: function() {
    var content;

    switch(this.props.mobileView) {
      case "landing":
        content = <Landing />;
        break;
      case "general-info":
        content = <GeneralInfo />;
        break;
      case "rsvp":
        content = <RSVP />;
        break;
      case "travel":
        content = <Travel />;
        break;
      case "weekend-events":
        content = <WeekendEvents />;
        break;
    }

    return (
      <div>
        <NavMobile clickHandler={this.toggleNav} />
        <header onClick={this.toggleNav}></header>
        {content}
      </div>
    )
  },

  toggleNav: function() {
    this.setState({
      menuActive: !this.state.menuActive
    });
  }

});

module.exports = MobileContainer;
