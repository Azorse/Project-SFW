import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import quizAPI from "../utils/quizAPI"
import API from "../utils/API"
import Nav from "../components/Nav"
import Question from "../components/QuizForm"
import questions from "../question.json"

class Quiz extends Component {

    state = {
      questions,
      questionsArr: [],
      selectedOption: {},
      house: ""
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
    .then(res => console.log(res))
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
    // const {id, house} = this.props.location.state
    return (
      <div>
      <h1>{this.state.house}</h1>
      <form onSubmit={this.handleFormSubmit} style={{backgroundColor: "white"}}>
      {this.state.questions.map(question => (
        <div>
        <h1 key={question.questionID}>{question.questionTitle}</h1>
        {question.options.map((element, i) => (
          <label id={`question-${question.questionID}-guess`}>
          <input type="radio" id={question.questionID} value={parseInt(i)} name={`question-${question.questionID}-guess`} onClick={this.handleOptionChange} style={{marginLeft: "20px"}}/>
          {element}  
          </label>
        ))}

        </div>
      ))}
       <button className="btn btn-default" type="submit">Save</button>
       {/* <h1>{house}</h1> */}
      </form>
      </div>
    );
  }
}

export default Quiz;