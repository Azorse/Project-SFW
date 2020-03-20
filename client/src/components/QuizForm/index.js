import React from "react";
import questions from "../../question.json"



class Question extends React.Component {

  state = {
    rightAnswers:[""],
    questions,
    selectedOption: 'option1'
  }

  onClick = (e) => {
    console.log(e.target.value)
  }


  render(){
    return (
      <div className="container" style={{backgroundColor:"white"}}>

        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              <div className="radio">
                <label>
                  <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
                  {this.props.value}
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
                  Option 2
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}/>
                  Option 3
                </label>
              </div>
              <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default Question;
