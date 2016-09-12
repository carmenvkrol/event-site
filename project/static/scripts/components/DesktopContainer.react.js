var React = require('react');
var $ = require('jquery');

var GeneralInfo = require('./GeneralInfo.react');
var Landing = require('./Landing.react');
var NavDesktop = require('./NavDesktop.react');
var RSVP = require('./RSVP.react');
var Travel = require('./Travel.react');
var WeekendEvents = require('./WeekendEvents.react');

function getSectionTop() {
  return {
    generalInfo: $('#general-info').offset().top,
    rsvp: $('#rsvp').offset().top,
    travel: $('#travel').offset().top,
    weekendEvents: $('#weekend-events').offset().top,
  };
}

var DesktopContainer = React.createClass({
  getInitialState: function() {
    return {
      sectionTops: null,
      top: null
    };
  },

  handleResize: function() {
    this.setState({
      sectionTops: getSectionTop(),
      top: $(window).scrollTop()
    });
  },

  handleScroll: function() {
    this.setState({
      top: $(window).scrollTop()
    });
  },

  componentDidMount: function() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      sectionTops: getSectionTop(),
      top: $(window).scrollTop()
    })
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  },

  render: function() {
    var sectionTops = this.state.sectionTops;
    var top = this.state.top;

    return (
      <div>
        <NavDesktop clickHandler={this.goToSection}
                    sectionTops={sectionTops}
                    top={top}/>
        <Landing />
        <GeneralInfo />
        <RSVP />
        <Travel />
        <WeekendEvents />
        <footer>Carmen V. Krol &copy; Copyright 2016</footer>
      </div>
    )
  },

  goToSection: function(sectionTop) {
    var sectionID = '#' + sectionTop;
    $('html body').animate({
      scrollTop: $(sectionID).offset().top
    }, 2000);
  }
});

module.exports = DesktopContainer;
