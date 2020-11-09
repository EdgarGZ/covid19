// React
import React from 'react';

// Utilities
import Plotly from 'plotly.js-dist'

import './HeatMap.css';

class HeatMap extends React.Component {

    componentDidMount() {
        Plotly.d3.csv(`/covid1.csv`,
            function(err, rows){function unpack(rows, key) {return rows.map(function(row){ return row[key];
        })};

        let data = [{
            showscale: false,
            lon: unpack(rows, 'Longitude'), lat: unpack(rows, 'Latitude'), radius:10,
            z: unpack(rows, ' Cumulative_cases'), type: "densitymapbox"
            // hoverinfo: 'skip'
        }];

        let layout = {
            mapbox: {center: {lon: -41.275021, lat: 38.040473}, style: "dark", zoom: 2},
            width: 900, height: 500, margin: {t: 0, l: 0, b: 0, r: 0},
        };

        let config = {mapboxAccessToken: "pk.eyJ1IjoiemVnbyIsImEiOiJja2g5dHp6eGQwd2Q0MnlvNHZqOTJkbTlyIn0.VTw9fmrSxtVs4IeVb0Ih1Q", displayModeBar: false};

        Plotly.newPlot('heat-map', data, layout, config);
        })
    }

    render() {
        return (
            <div id="heat-map" style={{ paddingLeft: "16px", paddingRight: "16px", borderRadius: "25px" }}></div>
        );
    }

}

export default HeatMap;
