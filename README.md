# idyll-plotly-example

This project shows an example of including an [Plotly](http://plotly.com/) plot in an [Idyll](https://idyll-lang.org/) document.

## Running it

To run the project, clone the repo and start the Idyll development server.

```sh
npm update -g idyll
git clone git@github.com:rreusser/idyll-plotly-example.git
cd idyll-plotly-example
npm install
idyll
```

## Getting a plot

For portability, the fundamental representation of a Plotly plot is JSON. If the JSON represents a valid plot, then any way you can obtain it should work here. Below are a couple common solutions.

If you have a plot in the Plotly cloud, you can add `.json` to the URL, as in https://chart-studio.plot.ly/~rreusser/99.json and place the resulting JSON in the `data/` directory of your Idyll project.

If you're creating plots via the Plotly Python API, you can also use `fig.to_json()` to obtain the JSON representation of a plot.

Once you have data in your data directory, you may reference the data with a `data` element. For example if the data is in `data/plotData.json`, then you may include it with

```
[data name:'plotData' source:'plotData.json'/]
```

## Drawing the plot

There is a [Plotly.js React component](https://plot.ly/javascript/react/), but I had trouble getting it to work since server-side rendering fails if `document` is not defined. Instead, I defined a simple wrapper in `components/plot.js`:

```jsx
const React = require('react');
var Plot
try {
  const Plotly =  require('plotly.js/dist/plotly-basic.min.js');
  Plot = require('react-plotly.js/factory').default(Plotly);
} catch (e) {
  console.warn(e);
}

class PlotComponent extends React.Component {
  render() {
    return Plot ? <Plot {...this.props.data}/> : <div/>;
  }
}

module.exports = PlotComponent;
```

Finally, we can hook everything up with Idyll:

```
[data name:'plotData' source:'plotData.json' /]

[Plot data:plotData/]
```
