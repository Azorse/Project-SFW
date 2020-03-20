import React, { Component } from "react";
import { Link } from "react-router-dom"
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/Button";
import { Jumbotron } from "../components/Jumbotron";
import ReactDOM from "react-dom";
import axios from "axios";
import quizAPI from "../utils/quizAPI"
import API from "../utils/API"
import Nav from "../components/Nav"
import Question from "../components/QuizForm"
import questions from "../question.json"
import Gryffindor from "../components/Images/gryffindorSmall.png";
import Hufflepuff from "../components/Images/hufflepuffSmall.png";
import Ravenclaw from "../components/Images/ravenclawSmall.png";
import Slytherin from "../components/Images/slytherinSmall.png";
import Hogwarts from "../components/Images/hogwartsSmall.png";


class Quiz extends Component {

    state = {
      questions,
      questionsArr: [],
      selectedOption: {},
      images: [
        {
          name: Gryffindor,
          value: "gryffindor",
          data:
            "The Gryffindor house emphasises the traits of courage as well as daring, nerve, and chivalry, and thus its members are generally regarded as brave, though sometimes to the point of recklessness. Some Gryffindors have also been noted to be short-tempered."
        },
        {
          name: Hufflepuff,
          value: "hufflepuff",
          data:
            "Students belonging to this house are known to be hard-working, friendly, loyal, honest and rather impartial. It may be that due to their values, Hufflepuffs are not as competitive as the other houses, and are more modest about their accomplishments. Hufflepuff is the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its students."
        },
        {
          name: Ravenclaw,
          value: "ravenclaw",
          data:
            "Ravenclaw House prizes learning, wisdom, wit, and intellect in its members. Thus, many Ravenclaws tend to be academically motivated and talented students. They also pride themselves on being original in their ideas, and methods. It's not unusual to find Ravenclaw students practising especially different types of magic that other houses might shun."
        },
        {
          name: Slytherin,
          value: "slytherin",
          data:
            "Slytherins tend to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented. They also have highly developed senses of self-preservation. This means that Slytherins tend to hesitate before acting, so as to weigh all possible outcomes before deciding exactly what should be done."
        },
        {
          name: Hogwarts,
          value: "hogwarts",
          data:
            "You have yet to be sorted"
        }
      ],
      firstName: "",
      house: "",
      houseImg: "",
      houseData: "",
      loggedIn: false,
      user: null,
    }

  componentDidMount() {
    this.loggedIn();
    
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

  handleOptionChange = (changeEvent) => {
    const val = changeEvent.target
    const ho = this.state.house
    const value = parseInt(val.value)
      // const prevState = {};
      this.setState( prevState => (
        {
        ...prevState,
        selectedOption: {
          ...prevState.selectedOption,
          [val.id]: value
        }
      }
      
    ))
  }

  handleFormSubmit = (formSubmitEvent) => {
    // const {id, house} = this.props.location.state
    // console.log(house)
    formSubmitEvent.preventDefault();
    // quizAPI.saveQuiz(this.state.selectedOption)
    // .then(console.log("saved answers"))
    console.log(this.state.selectedOption)
    console.log('You have selected:', this.state.questions[1].questionID);
    let n = [];
    for(var i = 0; i < this.state.questions.length; i++){
      // for(var el in this.state.selectedOption){
        // console.log(this.state.selectedOption[el])
        // console.log(el)
        console.log(this.state.selectedOption[i])
        if(this.state.selectedOption[i] == this.state.questions[i].correctAnswer){
          console.log("Correct")
          n[i] = 1
        }
        else{
          console.log("wrong")
          n[i] = 0
        }
      // }
    }

    quizAPI.saveQuiz({
      questions: [{
        questionOne: this.state.selectedOption[0],
        questionTwo: this.state.selectedOption[1],
        questionThree: this.state.selectedOption[2],
        questionFour: this.state.selectedOption[3],
        questionFive: this.state.selectedOption[4],
        questionSix: this.state.selectedOption[5],
        questionSeven: this.state.selectedOption[6],
        questionEight: this.state.selectedOption[7],
        questionNine: this.state.selectedOption[8],
        question10: this.state.selectedOption[9]
      }],
      houseName: this.state.house
    })
    .then(res => {console.log(res)})
    .catch(err => console.log(err))
      
    // for (var i = 0; i < this.state.selectedOption.length; i++){
    //     if(this.state.selectedOption[i].value == this.state.questions[i].correctAnswer){
    //       console.log(this.state.selectedOption[i])
    //     console.log("yea that's the right answer")
    //     // n[i] = 1
    //   }
    //   else{
    //     console.log("wrong answer")
    //     // n[i] = 0
    //   }
    // }
  }

  render() {
    const {id, house} = this.props.location.state
    return (
      <Container fluid>
      <Nav />
        <Row>
          <Col size="md-12">
            <Jumbotron house={house} image={this.state.houseImg} id={id}>
              <h1>Harry Potter Quiz</h1>
            </Jumbotron>
            <h1>Hello {id}{house}</h1>
            <br></br>
            <br></br>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
      <div>
      <form onSubmit={this.handleFormSubmit}>
      {this.state.questions.map(question => (
        <div style={{color: "gold"}}>
        <h1 key={question.questionID}>{question.questionID + 1}{".) "}{question.questionTitle}</h1>
        {question.options.map((element, i) => (
          <label id={`question-${question.questionID}-guess`}>
          <input type="radio" id={question.questionID} value={parseInt(i)} name={`question-${question.questionID}-guess`} onClick={this.handleOptionChange} style={{marginRight: "5px", marginLeft: "20px"}}/>
          {element}  
          </label>
        ))}
          <br></br>
          <br></br>
          <br></br>
        </div>
      ))}
      <Link to="/standings">
       <button href="/standings" className="btn btn-default" 
       type="submit">Save</button>
       </Link>
       {/* <h1>{house}</h1> */}
      </form>
      </div>
          </Col>
        </Row>
      </Container>
      
    );
  }
}

export default Quiz;