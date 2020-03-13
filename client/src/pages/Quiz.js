import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Nav from "../components/Nav"
import Question from "../components/QuizForm"
import questions from "../question.json"

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
      selectedOption: []
    }
    

  handleOptionChange = (changeEvent) => {
    // this.setState({
      const coolArr = []
      coolArr.push(changeEvent.target.value)
      console.log(coolArr)
      this.setState({
        selectedOption: this.state.selectedOption.concat(coolArr)
      })
    // });
  }

  handleFormSubmit = (formSubmitEvent) => {
    formSubmitEvent.preventDefault();
    console.log(this.state.selectedOption)
    console.log('You have selected:', this.state.selectedOption);
    for (var i = 0; i < this.state.selectedOption.length; i++){
      if(this.state.selectedOption[i] == this.state.questions[i].correctAnswer){
        console.log("yea that's the right answer")
      }
      else{
        console.log("wrong answer")
      }
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} style={{backgroundColor: "white"}}>
      {this.state.questions.map(question => (
        <div>
        <h1 key={question.questionID}>{question.questionTitle}</h1>
        {question.answers.map(element => (
          <label key={element}>
          <input type="radio" value={element} name={question.answers[0]} onChange={this.handleOptionChange} style={{marginLeft: "20px"}}/>
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

