import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=true"
      )
      .then(res => {
        const x = res.data;
        let chartData = [];
        x.forEach(element => {
          chartData.push({
            labels: ["Griffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
            datasets: [{ data: element.sparkline_in_7d.price,
                        backgroundColor: ["rgba(139, 23, 23, 0.5)",
                                          "rgba(32, 103, 29, 0.5)",
                                          "rgba(11, 37, 141, 0.5)",
                                          "rgba(202, 183, 6, 0.5)"],
                        label:["Griffindor"]
                                        }]
          });
        });
        this.setState({ chartData });
      });
     }

  render() {
    return (
      <div className="chart">
        {this.state.chartData.map((n, index) => {
          return <Bar key={index} data={n} />;
        })}
      </div>
    );
  }
}

export default Chart;

const rootElement = document.getElementById("root");
ReactDOM.render(<Chart />, rootElement);
