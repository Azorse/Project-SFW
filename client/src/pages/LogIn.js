import React, { Component } from "react";
import DeleteBtn from "../components/Button";
import { Jumbotron2 as Jumbotron } from "../components/Jumbotron";
import { Jumbotron as Jumbotron2 } from "../components/Jumbotron";
import API from "../utils/API";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Gryffindor from "../components/Images/gryffindorSmall.png";
import Hufflepuff from "../components/Images/hufflepuffSmall.png";
import Ravenclaw from "../components/Images/ravenclawSmall.png";
import Slytherin from "../components/Images/slytherinSmall.png";

class LogIn extends Component {
  state = {
    images: [
      { name: Gryffindor, value: "Gryffindor" },
      { name: Hufflepuff, value: "Hufflepuff" },
      { name: Ravenclaw, value: "Ravenclaw" },
      { name: Slytherin, value: "Slytherin" }
    ],
    email: "",
    password: "",
    house: "",
    loggedIn: false,
    user: null,
    message: "",
    redirect: false
  };

  componentDidMount() {
    // this.loadBooks();
  }

  checkImg = (e, value) => {
    console.log(value);
    switch (value) {
      case Gryffindor:
        console.log("chose the good boys");
        this.setState({
          house: "gryffindor"
        });
        break;
      case Hufflepuff:
        console.log("chose the boring boys");
        this.setState({
          house: "hufflepuff"
        });
        break;
      case Ravenclaw:
        console.log("chose the nerdy boys");
        this.setState({
          house: "ravenclaw"
        });
        break;
      case Slytherin:
        console.log("chose the cool boys");
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
    if (this.state.email && this.state.password) {
      console.log(`submitted`)
      API.userLogin({
        email:this.state.email,
        password:this.state.password
      })
      .then(user => {
        console.log(user);
        if (user.data.loggedIn) {
          console.log(user.data)
          this.setState({
            loggedIn: true,
            house: user.data.houseName,
            user: user.data.user._id,
            redirect: true
          });
          console.log("log in successful");
          // window.location.href = '/home';
        }
        else if (user.data.message) {
          this.setState({
            message: user.data.message
          })
        }
      })
      .catch(err => console.log(err))
    }

  };

  render() {

    const { redirect } = this.state;

    if (redirect) {
      return (
        <Redirect to={{ pathname: "/home", state: {id: this.state.user, house: this.state.house} }} />
      )
    }

    return (
      <Container>
        <Row>
          <Col size="md-4"></Col>
          <Col size="md-4">
            <Jumbotron>
              {" "}
              <img src="./images/hogwarts.png" width="250"
                height="250" alt="Hogwarts Crest" />
              <h1>Log In</h1>{" "}
            </Jumbotron>
            <form onSubmit={this.handleFormSubmit}>
              <Input
                value={this.state.username}
                onChange={this.handleInputChange}
                name="email"
                type="email"
                placeholder="Email"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                placeholder="Password"
              />
              <FormBtn
                type="submit"
                disabled={!(this.state.email && this.state.password)}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-4"></Col>
        </Row>
        <Row>
          {this.state.images.map(image => (
            <ListItem>
              <img
                src={image.name}
                id={image.value}
                width="200"
                height="250"
                value={image.value}
                onClick={e => this.checkImg(e, image.name)}
              ></img>
            </ListItem>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LogIn;
