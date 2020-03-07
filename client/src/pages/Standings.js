import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Chart from "../components/Chart";

class Standings extends Component {

  constructor(){
    super();
    this.state = {
        chartData: {}
    }
}

    componentDidMount(){
      this.getChartData();
    }

    updateChart = () => {
      for (var i = 0; i < this.state.chartData.datasets[0].data.length; i++){
        console.log("Clicked!")
        this.state.chartData.datasets[0].data[i] += 20;
        // this.state.
      }
    }
x 
    getChartData(){

      //AJAX CALL FOR DATA FROM OUR API GOES HERE

      this.setState({
        chartData: {                
          labels: ['Boston', 'Worcester', 'Springfield'],
          datasets: [
            {
                label: 'Population',
                data: [
                    115,
                    16,
                    3
                ],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)'
                ]
            }
          ]
        }
      });
    }

    render() {
        return (
            <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>TEST</h1>
                </Jumbotron>
                <Chart chartData={() => this.state.chartData} legendPosition="bottom"/>
                <button onClick={this.updateChart}>update</button>
              </Col>
            </Row>
          </Container>
        )
    }
}

export default Standings;