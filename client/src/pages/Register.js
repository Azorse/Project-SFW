import React, { Component } from "react";
import { Jumbotron2 as Jumbotron } from "../components/Jumbotron";
import { Redirect } from "react-router";
import API from "../utils/API.js";
import { Alert } from "reactstrap";
import { Col, Row, Container } from "../components/Grid";
import { ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Gryffindor from "../components/Images/gryffindorSmall.png";
import Hufflepuff from "../components/Images/hufflepuffSmall.png";
import Ravenclaw from "../components/Images/ravenclawSmall.png";
import Slytherin from "../components/Images/slytherinSmall.png";
// import Hogwarts from "../components/Images/hogwartsSmall.png";

class Register extends Component {
  state = {
    images: [
      {name: Gryffindor, value: "Gryffindor"}, 
      {name: Hufflepuff, value: "Hufflepuff"},
      {name: Ravenclaw, value: "Ravenclaw"},
      {name: Slytherin, value: "Slytherin"},
      // {name: Hogwarts, value: "Hogwarts"}
    ],
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    house: "",
    message: "",
    redirect: false
  };
  checkImg = (e, value) => {
    console.log(value);
    switch (value) {
      case Gryffindor:
        console.log("chose the good boys");
        this.setState({
          house: "Gryffindor"
        });
        break;
      case Hufflepuff:
        console.log("chose the boring boys");
        this.setState({
          house: "Hufflepuff"
        });
        break;
      case Ravenclaw:
        console.log("chose the nerdy boys");
        this.setState({
          house: "Ravenclaw"
        });
        break;
      case Slytherin:
        console.log("chose the cool boys");
        this.setState({
          house: "Slytherin"
        });
        break;
      default:
        console.log("nothing was chosen");
        this.setState({
          house: "hogwarts"
        });
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
    if (
      this.state.firstName &&
      this.state.lastName &&
      this.state.email &&
      this.state.password &&
      this.state.house
    ) {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        houseName: this.state.house
      })

        .then(() => this.setState({ redirect: true }))
        .catch(err => {this.setState({message: "That email has already taken."})});
    }
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    } 

    return (
      <Container fluid>
        <Row>
          <Col size="md-4"></Col>
          <Col size="md-4">
            <Jumbotron>
              <h1>Register</h1>
            </Jumbotron>
            <form onSubmit={this.handleFormSubmit}>
              <hr />
              {this.state.message ? (
                <Alert className="animated fadeIn" color="danger">
                  {this.state.message}
                </Alert>
              ) : (
                <></>
              )}
              <Input
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firstName"
                placeholder="First Name"
              />
              <Input
                value={this.state.lastName}
                onChange={this.handleInputChange}
                name="lastName"
                placeholder="Last Name"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                type="email"
                name="email"
                placeholder="Email"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                name="password"
                placeholder="Password"
              />
              <FormBtn
                type="submit"
                disabled={
                  !(
                    this.state.firstName &&
                    this.state.lastName &&
                    this.state.email &&
                    this.state.password &&
                    this.state.house
                  )
                }
              >
                Sign Up
              </FormBtn>
            </form>
          </Col>
          <Col size="md-4"></Col>
        </Row>
        <Row className="d-flex justify-content-between">
          {this.state.images.map(image => (
            <ListItem className="d-flex justify-content-between">
              <img
                alt="house crest"
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

export default Register;