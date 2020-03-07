import React from "react";
import {Bar, Line, Pie} from 'react-chartjs-2'

class Chart extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            chartData: this.props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }

    render() {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{ 
                        maintainAspectRatio: true,
                        title: {
                            display: this.props.displayTitle,
                            text: 'Gryffindor',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true,
                                    min: 0,
                                    max: 200    
                                }
                              }]
                           }
                     }}
                />
            </div>
        )
    }
}

export default Chart;