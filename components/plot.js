const React = require('react');
const PlotComponent = (() => {
  try {
    // `document` is not available during server-side rendering, so we allow
    // this to fail and render an empty div during server-side rendering
    const Plotly =  require('plotly.js/dist/plotly-basic.min.js');
    return require('react-plotly.js/factory').default(Plotly);
  } catch (e) { }
})();

class Plot extends React.Component {
  render() {
    return PlotComponent ? <PlotComponent {...this.props.data}/> : <div/>;
  }
}

module.exports = Plot;
