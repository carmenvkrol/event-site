var React = require('react');
var classNames = require('classnames');

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
      <div className={classNames({
        'menu-active': this.state.menuActive
      })}>
        <NavMobile clickHandler={this.toggleNav} />
        <header className={classNames({
          'header-active': this.props.mobileView !== 'landing',
          'nav-mobile-header': true
        })} onClick={this.toggleNav}>
          <p className="nav-mobile-header__wording">
            Jellyfish! 9/10/16
          </p>
          <div
            className="nav-mobile-header__hamburger-container">
            <div
              className="nav-mobile-header__hamburger"
              onClick={this.toggleNav}>
            </div>
          </div>
        </header>
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
