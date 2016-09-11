var React = require('react');

var Landing = React.createClass({

  render: function() {
    return (
      <div className="landing">
        <div className="landing__overlay">
        </div>
        <div className="landing__wording">
          <h1 className="landing__name-wording">Jellyfish!</h1>
          <h2 className="landing__date-wording">September 10, 2016</h2>
        </div>
      </div>
    )
  }

});

module.exports = Landing;
