import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Chart from "../components/Chart";

class Standings extends Component {

  constructor(){
    super();
    this.state = {
        chartData: {
          labels: ['Boston', 'Worcester', 'Springfield'],
          datasets: [
            {
                label: 'Population',
                data: [0, 0, 0],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)'
                ]
            },
                        {
                label: 'Population',
                data: [0, 0, 0],
                backgroundColor:[
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)'
                ]
            },
          ]
        }
    }
}

    componentDidMount(){
      this.getChartData();
    }

    updateChart = () => {
      // for (var i = 0; i < this.state.chartData.datasets[0].data.length; i++){
      //   console.log("Clicked!")
      //   this.state.chartData.datasets[0].data[i] += 20;
      //   // this.state.
      // }
      

    }
 
    getChartData(){

      //AJAX CALL FOR DATA FROM OUR API GOES HERE

      const randNum = this.state.chartData.datasets[0].data.map((num) => Math.floor(Math.random() * 200))
      const gryff = [10, 5, 4]
      const slyth = [3, 3, 2]
      const huff = [100, 29, 34]
      const rave = [24, 50, 33]
      
      if (this.props.titleText == "Gryffindor"){
        this.setState({chartData: {                
            labels: ['Boston', 'Worcester', 'Springfield'],
            datasets: [
              {
                  label: 'Population',
                  data: gryff,
                  backgroundColor:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(54, 162, 235, 0.6)',
                      'rgba(255, 206, 86, 0.6)'
                  ]
              }
            ]
          } 
        })
      }
    }

    render() {
        return (
            <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>TEST</h1>
                </Jumbotron>
                <Chart chartData={() => this.state.chartData} legendPosition="bottom" titleText="Gryffindor"/>
                <Chart chartData={() => this.state.chartData} legendPosition="bottom" titleText="Slytherin"/>
                <Chart chartData={() => this.state.chartData} legendPosition="bottom" titleText="Hufflepuff"/>
                <Chart chartData={() => this.state.chartData} legendPosition="bottom" titleText="Ravenclaw"/>
                <button onClick={this.updateChart}>update</button>
              </Col>
            </Row>
          </Container>
        )
    }
}

export default Standings;