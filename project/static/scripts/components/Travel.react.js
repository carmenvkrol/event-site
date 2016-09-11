var React = require('react');

var Travel = React.createClass({

  render: function() {
    return (
      <div className="travel">
        <h1 className="travel__header">Travel</h1>
        <div className="travel__detail-container">
          <div className="travel__left-container">
            <div className="travel__hotel-container">
              <h2 className="travel__sub-header">Hotel Discount</h2>
              <p className="travel__hotel-wording">A block of rooms have been reserved from Friday, September 9th to Sunday, September 11th (2 nights).</p>
              <p className="travel__hotel-wording">Because the hotel can only offer this discount based on availability, we suggest that you book as soon as possible. <strong>Make sure to mention that you're with the "Jellyfish Party."</strong></p>
              <p>Here's the contact info:</p>
              <div className="travel__hotel-address-container">
                <p className="travel__hotel-address">Monterey Hotel</p>
                <p className="travel__hotel-address">25 Main Street</p>
                <p className="travel__hotel-address">Monterey, CA 93940</p>
                <p className="travel__hotel-address">(888) 555-1234</p>
              </div>
            </div>
          </div>
          <div className="travel__right-container">
            <div className="travel__weather-container">
              <h2 className="travel__sub-header">Weather</h2>
              <p>Because the jellyfish event will include outdoor and indoor elements, we want to let you know that the weather in Monterey can vary greatly in September.  It might be sunny and 70s, but it could also get rainy and in the 50s.</p>
            </div>
            <div className="travel__airport-container">
              <h2 className="travel__sub-header">Airport</h2>
              <p>The area is served by both San Francisco International Airport (SFO) and San Jose Airport (SJC).</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = Travel;
