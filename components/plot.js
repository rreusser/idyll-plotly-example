const React = require('react');

// Plotly uses `document`, which causes static server-side rendering to fail, so we
// allow Plotly to be undefined if rendering on the server.
//
// Also, I've included the plotly-basic.min.js bundle since it's *significantly* smaller
// than the basic kitchen-sink build that you get it you require('plotly.js'). You can
// see more details about the bundles and their sizes here:
// https://github.com/plotly/plotly.js/tree/master/dist#bundle-information
var Plotly = (() => {try { return require('plotly.js/dist/plotly-basic.min.js') } catch (e) {}})()

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
