import React, { Component } from "react";
import DeleteBtn from "../components/Button";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Gryffindor from "../components/Images/gryffindorSmall.png"
import Hufflepuff from "../components/Images/hufflepuffSmall.png"
import Ravenclaw from "../components/Images/ravenclawSmall.png"
import Slytherin from "../components/Images/slytherinSmall.png"

class Home extends Component {
  state = {
    images: [
      {name: Gryffindor, value: "gryffindor"}, 
      {name: Hufflepuff, value: "hufflepuff"},
      {name: Ravenclaw, value: "ravenclaw"},
      {name: Slytherin, value: "slytherin"}
    ],
    username: "",
    email: "",
    house: "",
    houseImg: ""
  };

  componentDidMount() {
    this.loadUser();
  }

  // Will need modification after creating the database and api calls
  loadUser = (id) => {
    // API.getUser(id)
    //   .then(res =>
    //     this.setState({ username: res.data.username, house: res.data.house })
    //   )
    //   .catch(err => console.log(err));
    const num = Math.floor(Math.random()*4)
    let theHouse = this.state.images[num].value
    console.log(num)
    console.log(theHouse)
    // this.setState({ username: "Bob", house: theHouse})
    switch(theHouse){
      case this.state.images[0].value:
        theHouse = this.state.images[0].name
        break;
      case this.state.images[1].value:
        theHouse = this.state.images[1].name
        break;
      case this.state.images[2].value:
        theHouse = this.state.images[2].name
        break;
      case this.state.images[3].value:
        theHouse = this.state.images[3].name
        break;
    }
    this.setState({ houseImg: theHouse })
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    const {houseImg} = this.state
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1> Books Should I Read?</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <img src={houseImg} width="200" height="250"></img>
        </Row>
      </Container>
    );
  }
}

export default Home;