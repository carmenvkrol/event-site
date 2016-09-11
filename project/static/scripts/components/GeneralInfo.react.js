var React = require('react');

var GeneralInfo = React.createClass({

  render: function() {
    var iframeStyle = {
      border: 0
    };

    return (
      <div className="general-info">
        <h1 className="general-info__header">The Main Event</h1>
        <div className="general-info__event-container">
          <h2 className="general-info__sub-header">Saturday, September 10th at 11am at Monterey Aquarium</h2>
          <p className="general-info__wording">See a large assortment of beautiful jellyfish.</p>
          <em className="general-info__wording">In case of beach traffic, we highly suggest that you give yourself plenty of extra time to arrive.</em>
        </div>
        <div className="general-info__direction-container">
          <div className="general-info__venue-container">
            <h2>Monterey Bay Aquarium</h2>
            <p>886 Cannery Row</p>
            <p>Monterey, CA 93940</p>
            <a href="http://www.montereybayaquarium.org/" target="_blank">website</a>
          </div>
          <div className="general-info__map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.3374165105565!2d-121.90398058502747!3d36.618263979986345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808de6aa8166e4e3%3A0xb5a84a1997229b63!2sMonterey+Bay+Aquarium!5e0!3m2!1sen!2sus!4v1473627900080" width="200" height="150" frameborder="0" style={iframeStyle} allowfullscreen>
          </iframe>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = GeneralInfo;
