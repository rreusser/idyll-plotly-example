const React = require('react');
const Plot = (() => {
  try {
    // `document` is not available during server-side rendering, so we allow
    // this to fail and render an empty div during server-side rendering
    const Plotly =  require('plotly.js/dist/plotly-basic.min.js');
    const Plot = require('react-plotly.js/factory').default(Plotly);
    return Plot;
  } catch (e) { }
})();

class PlotComponent extends React.Component {
  render() {
    return Plot ? <Plot {...this.props.data}/> : <div/>;
  }
}

module.exports = PlotComponent;
