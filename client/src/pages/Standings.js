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
      gryffinRight: [],
      ravenRight: [],
      slytherRight: [],
      huffleRight: []
    };
  }



  componentDidMount() {
    const gryffinRight= []
    const ravenRight = []
    const slytherRight= []
    const ids = []
  
    //Get Gryffindor
     quizAPI.getGryff()
     .then(res => {
      const x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      res.data.forEach(el => {
        el.questions.map(ele => {
          // ravenRight.push(ele)
          console.log(ele)
          
          for(var j = 1; j < Object.values(ele).length; j++){
            console.log(Object.values(ele)[j])
            x[j] += Object.values(ele)[j]
          }
          console.log(x)
          // Object.keys(ele).forEach(x => console.log(Object.values(ele)))
        })
        console.log(x)
      })
      chartData.push(
        {
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"],
        datasets: [{ data: x,
                    backgroundColor: "rgba(139, 23, 23, 0.5)",
                    label:"Gryffindor"
                                    }]
      })
      this.setState({ chartData });
    })
    .catch(err => console.log(err))


    //Get Slytherin
    quizAPI.getSlyth()
    .then(res => {
      const x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      res.data.forEach(el => {
        el.questions.map(ele => {
          // ravenRight.push(ele)
          console.log(ele)
          
          for(var j = 1; j < Object.values(ele).length; j++){
            console.log(Object.values(ele)[j])
            x[j] += Object.values(ele)[j]
          }
          console.log(x)
          // Object.keys(ele).forEach(x => console.log(Object.values(ele)))
        })
        console.log(x)
      })
      chartData.push(
        {
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"],
        datasets: [{ data: x,
                    backgroundColor: "rgba(32, 103, 29, 0.5)",
                    label:"Gryffindor"
                                    }]
      })
      this.setState({ chartData });
    })
    .catch(err => console.log(err))


    quizAPI.getRaven()
    .then(res => {
      const x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      res.data.forEach(el => {
        el.questions.map(ele => {
          // ravenRight.push(ele)
          console.log(ele)
          
          for(var j = 1; j < Object.values(ele).length; j++){
            console.log(Object.values(ele)[j])
            x[j] += Object.values(ele)[j]
          }
          console.log(x)
          // Object.keys(ele).forEach(x => console.log(Object.values(ele)))
        })
        console.log(x)
      })
      chartData.push(
        {
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"],
        datasets: [{ data: x,
                    backgroundColor: "rgba(11, 37, 141, 0.5)",
                    label:"Gryffindor"
                                    }]
      })
      this.setState({ chartData });
    })
    .catch(err => console.log(err))

    quizAPI.getHuff()
    .then(res => {
      const x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      res.data.forEach(el => {
        el.questions.map(ele => {
          // ravenRight.push(ele)
          console.log(ele)
          
          for(var j = 1; j < Object.values(ele).length; j++){
            console.log(Object.values(ele)[j])
            x[j] += Object.values(ele)[j]
          }
          console.log(x)
          // Object.keys(ele).forEach(x => console.log(Object.values(ele)))
        })
        console.log(x)
      })
      chartData.push(
        {
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"],
        datasets: [{ data: x,
                    backgroundColor: "rgba(202, 183, 6, 0.5)",
                    label:"Gryffindor"
                                    }]
      })
      this.setState({ chartData });
    })
    .catch(err => console.log(err))

    // axios
    //   .get(
    //     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=true"
    //   )
    //   .then(res => {
        // const x = res.data;
        // const x = questions;
        let chartData = [];
        // this.state.houses.forEach(element => {
        //   chartData.push(
        //     {
        //     labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"],
        //     datasets: [{ data:[10, 15, 15, 5],
        //                 backgroundColor: ["rgba(139, 23, 23, 0.5)",
        //                                   "rgba(32, 103, 29, 0.5)",
        //                                   "rgba(11, 37, 141, 0.5)",
        //                                   "rgba(202, 183, 6, 0.5)"],
        //                 label:"Gryffindor"
        //                                 }]
        //   },
        //   {
        //     labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"],
        //     datasets: [{ data:[10, 15, 15, 5],
        //                 backgroundColor: ["rgba(139, 23, 23, 0.5)",
        //                                   "rgba(32, 103, 29, 0.5)",
        //                                   "rgba(11, 37, 141, 0.5)",
        //                                   "rgba(202, 183, 6, 0.5)"],
        //                 label:"Slytherin"
        //                                 }]
        //   },
        //   {
        //     labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"],
        //     datasets: [{ data:[10, 15, 15, 5],
        //                 backgroundColor: ["rgba(139, 23, 23, 0.5)",
        //                                   "rgba(32, 103, 29, 0.5)",
        //                                   "rgba(11, 37, 141, 0.5)",
        //                                   "rgba(202, 183, 6, 0.5)"],
        //                 label:"Ravenclaw"
        //                                 }]
        //   },
        //   {
        //     labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"],
        //     datasets: [{ data:[10, 15, 15, 5],
        //                 backgroundColor: ["rgba(139, 23, 23, 0.5)",
        //                                   "rgba(32, 103, 29, 0.5)",
        //                                   "rgba(11, 37, 141, 0.5)",
        //                                   "rgba(202, 183, 6, 0.5)"],
        //                 label:"Hufflepuff"
        //                                 }]
        //   },
        //   );
        // // });
        // this.setState({ chartData });
      // });
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

