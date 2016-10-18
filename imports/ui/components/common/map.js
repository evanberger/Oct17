import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from "d3";
import * as topojson from "topojson";

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.el = null;
    this.width = 960;
    this.height = 500;
    this.loadStates = this.loadStates.bind(this);
    this.projection = d3.geoAlbersUsa()
      .translate([this.width / 2, this.height / 2])
      .scale([1000]);
    this.path = d3.geoPath()
      .projection(this.projection);
  }

  componentDidMount() {
    this.initMap()
  }

  loadStates(error, us) {
    if (error) throw error;

    this.svg.insert("path", ".buildings")
        .datum(topojson.feature(us, us.objects.land))
        .attr("class", "land")
        .attr("d", this.path);

    this.svg.insert("path", ".buildings")
        .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
        .attr("class", "state-boundary")
        .attr("d", this.path);
  }

  initMap() {
    const {width, height, projection, path} = this;
    this.el = ReactDOM.findDOMNode(this);

    //Create SVG element and append map to the SVG
    this.svg = d3.select(this.el)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    d3.json("/us.json", this.loadStates);
  }

  render() {
    return (
      <div className="buildings"></div>
    )
  }
};

export default Map;
