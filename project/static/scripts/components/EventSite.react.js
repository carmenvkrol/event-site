var React = require('react');
var DesktopContainer = require('./DesktopContainer.react');
var MobileContainer = require('./MobileContainer.react');

var EventSite = React.createClass({

  render: function() {
    var mobile = window.innerWidth <= 767 || screen.width <= 767;
    var content = null;

    if (!mobile) {
      content = <DesktopContainer />;
    } else {
      content = <MobileContainer />;
    }

    return (
      <div>
        {content}
      </div>
    )
  }

});

module.exports = EventSite;
