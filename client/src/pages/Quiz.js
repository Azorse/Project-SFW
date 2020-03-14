import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import quizAPI from "../utils/quizAPI"
import Nav from "../components/Nav"
import Question from "../components/QuizForm"
import questions from "../question.json"
import e from "express";

class Quiz extends Component {

    // constructor(props){
    //     super(props);
    
    //     this.state = {
    //       values: {},
    //       showValues: {}
    //     }
    //   }
    state = {
      questions,
      questionsArr: [],
      selectedOption: {}
    }
    

  handleOptionChange = (changeEvent) => {
      this.setState(function(prevState){
        return { 
        ...prevState,
        selectedOption: {
          ...prevState.selectedOption,
          [changeEvent.target.id]: changeEvent.target.value
        }
      }
    })
  }

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    // quizAPI.saveQuiz(this.state.selectedOption)
    // .then(console.log("saved answers"))
    console.log(this.state.selectedOption)
    console.log('You have selected:', this.state.selectedOption);
    let n = [];
    for (var i = 0; i < this.state.selectedOption.length; i++){
        if(this.state.selectedOption[i] == this.state.questions[i].correctAnswer){
        console.log("yea that's the right answer")
        n[i] = 1
      }
      else{
        console.log("wrong answer")
        n[i] = 0
      }
    }
    this.setState({selectedOption: n})
    n.forEach(el =>  {
      
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} style={{backgroundColor: "white"}}>
      {this.state.questions.map(question => (
        <div>
        <h1 key={question.questionID}>{question.questionTitle}</h1>
        {question.options.map(element => (
          <label id={`question-${question.questionID}-guess`}>
          <input type="radio" id={question.questionID} value={element} name={`question-${question.questionID}-guess`} onClick={this.handleOptionChange} style={{marginLeft: "20px"}}/>
          {element}  
          </label>
        ))}

        </div>
      ))}
       <button className="btn btn-default" type="submit">Save</button>
      </form>
      
    );
  }
}

export default Quiz;

