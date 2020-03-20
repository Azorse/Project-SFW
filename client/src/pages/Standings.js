import React, { Component } from "react";
import quizAPI from "../utils/quizAPI"
import { Bar } from "react-chartjs-2";
import API from "../utils/API";
import questions from "../question.json"
import Gryffindor from "../components/Images/gryffindorSmall.png";
import Hufflepuff from "../components/Images/hufflepuffSmall.png";
import Ravenclaw from "../components/Images/ravenclawSmall.png";
import Slytherin from "../components/Images/slytherinSmall.png";
import Hogwarts from "../components/Images/hogwartsSmall.png";
import { Col, Row, Container } from "../components/Grid";
import { Jumbotron } from "../components/Jumbotron";
import Nav from "../components/Nav"

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
      huffleRight: [],
      images: [
        {
          name: Gryffindor,
          value: "Gryffindor",
          data:
            "The Gryffindor house emphasises the traits of courage as well as daring, nerve, and chivalry, and thus its members are generally regarded as brave, though sometimes to the point of recklessness. Some Gryffindors have also been noted to be short-tempered."
        },
        {
          name: Hufflepuff,
          value: "Hufflepuff",
          data:
            "Students belonging to this house are known to be hard-working, friendly, loyal, honest and rather impartial. It may be that due to their values, Hufflepuffs are not as competitive as the other houses, and are more modest about their accomplishments. Hufflepuff is the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its students."
        },
        {
          name: Ravenclaw,
          value: "Ravenclaw",
          data:
            "Ravenclaw House prizes learning, wisdom, wit, and intellect in its members. Thus, many Ravenclaws tend to be academically motivated and talented students. They also pride themselves on being original in their ideas, and methods. It's not unusual to find Ravenclaw students practising especially different types of magic that other houses might shun."
        },
        {
          name: Slytherin,
          value: "Slytherin",
          data:
            "Slytherins tend to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented. They also have highly developed senses of self-preservation. This means that Slytherins tend to hesitate before acting, so as to weigh all possible outcomes before deciding exactly what should be done."
        },
        {
          name: Hogwarts,
          value: "Hogwarts",
          data:
            "You have yet to be sorted"
        }
      ],
      firstName: "",
      house: "",
      houseImg: "",
      houseData: "",
      loggedIn: false,
      user: null
    };
  }

  componentDidMount() {
    this.loggedIn();
     quizAPI.getGryff()
     .then(res => {
      const x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      res.data.forEach(el => {
        el.questions.map(ele => {
          // ravenRight.push(ele)
          // console.log(ele)
          
          for(var j = 1; j < Object.values(ele).length; j++){
            console.log(Object.values(ele)[j])
            x[j - 1] += Object.values(ele)[j]
          }
          // console.log(x)
          // Object.keys(ele).forEach(x => console.log(Object.values(ele)))
        })
        // console.log(x)
        
      })
      chartData.push(
        {
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10", "Zero Axes"],
        datasets: [{ data: x,
                    backgroundColor: "rgba(139, 23, 23, 0.5)",
                    label:"Gryffindor"
                                    }],
          options:{
            scales: {
                yAxes : [{
                    ticks : { 
                        min : 0
                    }
                }]
            }
        }
      })
      this.setState({ chartData });
    })
    .catch(err => console.log(err))


    //Get Slytherin
    quizAPI.getSlyth()
    .then(res => {
      const x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      res.data.forEach(el => {
        el.questions.map(ele => {
          // ravenRight.push(ele)
          // console.log(ele)
          
          for(var j = 1; j < Object.values(ele).length; j++){
            console.log(Object.values(ele)[j])
            x[j - 1] += Object.values(ele)[j]
          }
          // console.log(x)
          // Object.keys(ele).forEach(x => console.log(Object.values(ele)))
        })
        // console.log(x)
      })
      chartData.push(
        {
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10", "Zero Axes"],
        datasets: [{ data: x,
                    backgroundColor: "rgba(32, 103, 29, 0.5)",
                    label:"Slytherin"
                                    }],
        options:{
          scales: {
              yAxes : [{
                  ticks : {
                      max : 1,    
                      min : -1
                  }
              }]
          }
      }
      })
      this.setState({ chartData });
    })
    .catch(err => console.log(err))


    quizAPI.getRaven()
    .then(res => {
      const x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      res.data.forEach(el => {
        el.questions.map(ele => {
          // ravenRight.push(ele)
          console.log(ele)
          var objV = Object.values(ele)
          for(var j = 1; j < objV.length; j++){
            console.log(objV[j])
            x[j - 1] += objV[j]
          }
          console.log(x)
          // Object.keys(ele).forEach(x => console.log(Object.values(ele)))
        })
   
      })    
      chartData.push(
        {
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10", "Zero Axes"],
        datasets: [{ data: x,
                    backgroundColor: "rgba(11, 37, 141, 0.5)",
                    label:"Ravenclaw",

                  }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      })
      this.setState({ chartData });
    })
    .catch(err => console.log(err))

    quizAPI.getHuff()
    .then(res => {
      const x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      res.data.forEach(el => {
        el.questions.map(ele => {
          // ravenRight.push(ele)
          console.log(ele)
          
          for(var j = 1; j < Object.values(ele).length; j++){
            console.log(Object.values(ele)[j])
            x[j - 1] += Object.values(ele)[j]
          }
          // console.log(x)
          // Object.keys(ele).forEach(x => console.log(Object.values(ele)))
        })
        // console.log(x)
      })
      chartData.push(
        {
        labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10", "Zero Axes"],
        datasets: [{ data: x,
                    backgroundColor: "rgba(202, 183, 6, 0.5)",
                    label:"Hufflepuff"
                                    }]
      })
      this.setState({ chartData });
    })
    .catch(err => console.log(err))

    let chartData = [];
  }

  loggedIn = () => {
    API.isLoggedIn().then( user => {
      if (user.data.loggedIn) {
        this.setState({
          user: user.data.user._id,
          firstName: user.data.user.firstName,
          house: user.data.user.houseName,
          loggedIn: true
        })
        this.loadUser(user.data.user.houseName)
      }
    }).catch(err => {
      console.log(err)
    });
  }

  loadUser = house => {
    let theHouse = house;
    let houseDesc = "";
    console.log(house)

    switch (theHouse) {
      case this.state.images[0].value:
        theHouse = this.state.images[0].name;
        houseDesc = this.state.images[0].data;
        break;
      case this.state.images[1].value:
        theHouse = this.state.images[1].name;
        houseDesc = this.state.images[1].data;
        break;
      case this.state.images[2].value:
        theHouse = this.state.images[2].name;
        houseDesc = this.state.images[2].data;
        break;
      case this.state.images[3].value:
        theHouse = this.state.images[3].name;
        houseDesc = this.state.images[3].data;
        break;
      default:
        theHouse = this.state.images[4].name;
        houseDesc = this.state.images[4].data;
    }
    this.setState({ houseImg: theHouse, houseData: houseDesc });
  };


  render() {
    const {id, house} = this.state
    return (
            <Container fluid>
            <Nav firstName={this.state.firstName}/>
              <Row>
                <Col size="md-12">
                  <Jumbotron house={house} image={this.state.houseImg} id={id}>
                    <h1>Harry Potter Quiz</h1>
                  </Jumbotron>
                  <h1>Hello {this.state.firstName}</h1>
                </Col>
              </Row>
              <Row>
                <Col size="md-12">
                <div className="chart">
                  {this.state.chartData.map((n, index) => {
                    return <Bar key={index} data={n}/>;
                  })}
                </div>
             </Col>
            </Row>
          </Container>
      
    );
  }
}

export default Chart;

