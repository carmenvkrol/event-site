var React = require('react');

var WeekendEvents = React.createClass({

  render: function() {
    return (
      <div id="weekend-events" className="weekend-events">
        <h1 className="weekend-events__header">Weekend Events</h1>
        <div className="weekend-events__detail-container">
          <div className="weekend-events__friday-container">
            <h2 className="weekend-events__sub-header">Friday, September 9th</h2>
            <h3 className="weekend-events__time">starting at 6 pm until 10 pm</h3>
            <h3 className="weekend-events__location">Monterey Hotel</h3>
            <h3 className="weekend-events__location">The Bistro</h3>
            <p>25 Main Street, Monterey, CA 93940</p>
            <p>Casual drinks and catching up about aquatic life!</p>
          </div>
          <div className="weekend-events__saturday-container">
            <h2 className="weekend-events__sub-header">Sunday, September 11th</h2>
            <h3 className="weekend-events__time">12 noon</h3>
            <h3 className="weekend-events__location">Whale Watching!</h3>
            <p>Fisherman's Wharf #1</p>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = WeekendEvents;
