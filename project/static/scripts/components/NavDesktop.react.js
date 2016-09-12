var React = require('react');
var classNames = require('classnames');

var NavDesktop = React.createClass({

  setBodyContent: function() {
    var top = this.props.top;
    var sectionTops = this.props.sectionTops;
    if (top && sectionTops) {
      return top >= sectionTops.generalInfo - 50;
    }
    return false;
  },

  render: function() {
    var navClass = classNames({
      'nav-desktop': true,
      'body-content': this.setBodyContent()
    });

    return (
      <nav className={navClass}>
        <ul className="nav-desktop__list-container">
          <li className="nav-desktop__list-item" onClick={this.props.clickHandler.bind(null, 'general-info')}>
            <a className="nav-desktop__list-link">
              Event Info
            </a>
          </li>
          <li className="nav-desktop__list-item" onClick={this.props.clickHandler.bind(null, 'rsvp')}>
            <a className="nav-desktop__list-link">
              RSVP
            </a>
          </li>
          <li className="nav-desktop__list-item" onClick={this.props.clickHandler.bind(null, 'travel')}>
            <a className="nav-desktop__list-link">
              Travel
            </a>
          </li>
          <li className="nav-desktop__list-item" onClick={this.props.clickHandler.bind(null, 'weekend-events')}>
            <a className="nav-desktop__list-link">
              Weekend Events
            </a>
          </li>
        </ul>
      </nav>
    )
  }

});

module.exports = NavDesktop;
