import React, { Component } from "react";
import { Jumbotron2 as Jumbotron } from "../components/Jumbotron";
import API from "../utils/API";
import { Alert } from "reactstrap";
import { Col, Row, Container } from "../components/Grid";
import { ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import Gryffindor from "../components/Images/gryffindorSmall.png";
import Hufflepuff from "../components/Images/hufflepuffSmall.png";
import Ravenclaw from "../components/Images/ravenclawSmall.png";
import Slytherin from "../components/Images/slytherinSmall.png";
import Hogwarts from "../components/Images/hogwartsSmall.png";


class LogIn extends Component {
  state = {
    images: [
      { name: Gryffindor, value: "Gryffindor" },
      { name: Hufflepuff, value: "Hufflepuff" },
      { name: Ravenclaw, value: "Ravenclaw" },
      { name: Slytherin, value: "Slytherin" },
      { name: Hogwarts, value: "Hogwarts"}
    ],
    email: "",
    password: "",
    house: "",
    loggedIn: false,
    user: null,
    message: "",
    error: ""
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
    if (this.state.email && this.state.password) {
      API.userLogin({
        email:this.state.email,
        password:this.state.password
      })
      .then(user => {
        if (user.data._id) {
          this.setState({
            loggedIn: true,
            user: user.data._id
          });
          console.log("log in successful");
          window.location.href = '/home';
        }
        else if (user.data.message) {
          this.setState({
            message: user.data.message
          })
        }
      })
      .catch(err => console.log(err));
    };
  }

  render() {

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
              <hr />
              {this.state.message && (
                <Alert className="animated fadeIn" color="danger">
                  {this.state.message}
                </Alert>
              )}
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

export default LogIn;
