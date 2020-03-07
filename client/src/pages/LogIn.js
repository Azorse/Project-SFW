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
    house: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  checkImg = (e, value) => {
    console.log(value)
    switch(value){
      case Gryffindor:
        console.log("chose the good boys")
        this.setState({
          house: "gryffindor"
        });
        break;
      case Hufflepuff:
        console.log("chose the boring boys")
        this.setState({
          house: "hufflepuff"
        });
        break;
      case Ravenclaw:
        console.log("chose the nerdy boys")
        this.setState({
          house: "ravenclaw"
        });
        break;
      case Slytherin:
        console.log("chose the cool boys")
        this.setState({
          house: "slytherin"
        });
        break;
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("submit works")
    if (this.state.username && this.state.email && this.state.house) {
      //Put code here
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Log In</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="username"
                placeholder="Username (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              {/* <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                disabled={!(this.state.username && this.state.email && this.state.house)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          {this.state.images.map(image => (
            <ListItem>
              <img src={image.name} id={image.value} width="200" height="250" value={image.value} onClick={((e) => this.checkImg(e, image.name))}></img>
            </ListItem>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Home;