import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import Chart from "../components/Chart";

class Standings extends Component {

  constructor(){
    super();
    this.state = {  
        data: [
          {
            name: "Gryff",
            labels: ['Boston', 'Worcester', 'Springfield'],
            dataset: {
              label: 'Population',
              data: [243,20, 10],
              backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)'
              ]
            }
          },
          {
            name: "Slytherin",
            labels: ['Boston', 'Worcester', 'Springfield'],
            dataset: {
              label: 'Population',
              data: [243,200, 10],
              backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)'
              ]
            }
          },
          {
            name: "Hufflepuff",
            labels: ['Boston', 'Worcester', 'Springfield'],
            dataset: {
              label: 'Population',
              data: [243,20, 100],
              backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)'
              ]
            }
          },
          {
            name: "Ravenclaw",
            labels: ['Boston', 'Worcester', 'Springfield'],
            dataset: {
              label: 'Population',
              data: [243, 3000, 10],
              backgroundColor:[
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)'
              ]
            }
          }

      ]
    }
}

    componentDidMount(){
      this.getChartData();
    }

    getChartData(){

      //AJAX CALL FOR DATA FROM OUR API GOES HERE

      //const randNum = this.state.chartData.datasets[0].data.map((num) => Math.floor(Math.random() * 200))
      const gryff = [10, 5, 4]
      const slyth = [3, 3, 2]
      const huff = [100, 29, 34]
      const rave = [24, 50, 33]
    

    }

    render() {
        return (
            <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>TEST</h1>
                </Jumbotron>
                {this.state.data.map(element => {
                  console.log(element.dataset)
                  return <Chart key={element.name} data={element.dataset} legendPosition="bottom" titleText={element.name}/>
                })}
                
                {/* <Chart chartData={() => this.state.chartData[1]} legendPosition="bottom" titleText="Slytherin"/>
                <Chart chartData={() => this.state.chartData[2]} legendPosition="bottom" titleText="Hufflepuff"/>
                <Chart chartData={() => this.state.chartData[3]} legendPosition="bottom" titleText="Ravenclaw"/> */}
                <button onClick={this.updateChart}>update</button>
              </Col>
            </Row>
          </Container>
        )
    }
}

export default Standings;