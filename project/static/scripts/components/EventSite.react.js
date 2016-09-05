var React = require('react');
var DesktopContainer = require('./DesktopContainer.react');
var MobileContainer = require('./MobileContainer.react');

var NavStore = require('../stores/NavStore');

var EventSite = React.createClass({

  getInitialState: function() {
    return {
      mobileView: NavStore.getView()
    }
  },

  componentWillMount: function() {
    NavStore.addChangeListener(this.onViewChange);
  },

  componentWillUnmount: function() {
    NavStore.removeChangeListener(this.onViewChange);
  },

  render: function() {
    var mobile = window.innerWidth <= 767 || screen.width <= 767;
    var content = null;

    if (!mobile) {
      content = <DesktopContainer />;
    } else {
      content = <MobileContainer mobileView={this.state.mobileView} />;
    }

    return (
      <div>
        {content}
      </div>
    )
  },

  onViewChange: function() {
    this.setState({
      mobileView: NavStore.getView()
    })
  }

});

module.exports = EventSite;
