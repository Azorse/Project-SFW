import React, { Component } from "react";
import ReactDOM from "react-dom";
import quizAPI from "../utils/quizAPI"
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import questions from "../question.json"
//import questions from "../quiz.json"

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      data: [],
      questions,
      houses: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
      questionIds: []
    };
  }



  componentDidMount() {
    const gryffinOneRight = 0 
    const ravenRight = 0
    const slytherRight= 0
    const ids = []
    this.state.questions.forEach(el => {
      ids.push(el.questionID)

      this.setState({questionIds: this.state.questionIds.concat(ids)})})
  
    //Get Gryffindor
     quizAPI.getGryff()
     .then(res => {
      //  console.log(res.data)
       res.data.forEach(el => {
         Object.keys(el).map(function(key) {
           console.log([String(key), el[key]])
         })
        // var sum = 0
        // console.log(sum)
       })
     })
     .catch(err => console.log(err))

    //Get Slytherin
    quizAPI.getSlyth()
    .then(res => {
      res.data.forEach(el => {
        console.log(el)
       //  if(el.houseName == "Gryffindor"){
       //     for(var j = 0; j < el.questionId.length; j++){
       //       console.log(j)
       //     }
       //  }
      })
    })
    .catch(err => console.log(err))

    quizAPI.getRaven()
    .then(res => {
      res.data.forEach(el => {
        console.log(el)

      })
    })
    .catch(err => console.log(err))


    // axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=true"
    //   )
    //   .then(res => {
        // const x = res.data;
        const x = questions;
        let chartData = [];
        this.state.houses.forEach(element => {
          chartData.push({
            labels: [1],
            datasets: [{ data: [10, 35, 341, 45],
                        backgroundColor: ["rgba(139, 23, 23, 0.5)",
                                          "rgba(32, 103, 29, 0.5)",
                                          "rgba(11, 37, 141, 0.5)",
                                          "rgba(202, 183, 6, 0.5)"],
                        label:element
                                        }]
          });
        });
        this.setState({ chartData });
      // });
     }

  render() {
    console.log(this.state.questionIds)
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

