const React = require('react');
const Plot = (() => {try { return require('react-plotly.js').default } catch (e) {}})();

class PlotComponent extends React.Component {
  render() {
    return Plot ? <Plot {...this.props.data}/> : <div/>;
  }
}

module.exports = PlotComponent;
