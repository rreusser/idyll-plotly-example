const React = require('react');

// Plotly uses `document`, which causes static server-side rendering to fail, so we
// allow Plotly to be undefined if rendering on the server
var Plotly = (() => {try { return require('plotly.js') } catch (e) {}})()

class Plot extends React.Component {
  getElementReference (graphDiv) {
    // This method is only called on the client so that the div will be blank if
    // rendered statically.
    Plotly.plot(graphDiv, this.props.data)
  }

  render() {
    return (
      <div ref={this.getElementReference.bind(this)}></div>
    );
  }
}

module.exports = Plot;
