import React from "react";
import {Bar, Line, Pie} from 'react-chartjs-2'

class Chart extends React.Component {

    constructor(props){
        super(props);
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        titleText: ''
    }

    render() {
        return (
            <div className="chart">
                <Bar
                    key= {this.props.data.name}
                    data={this.props.data}
                    options={{ 
                        maintainAspectRatio: true,
                        title: {
                            display: this.props.displayTitle,
                            text: this.props.titleText,
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