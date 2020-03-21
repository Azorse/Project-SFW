import React, { Component } from "react";
import { Redirect } from "react-router";
import { Jumbotron2 as Jumbotron } from "../components/Jumbotron";
import { Jumbotron as Jumbotron2 } from "../components/Jumbotron";
import API from "../utils/API";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Alert } from "reactstrap";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Gryffindor from "../components/Images/gryffindorSmall.png";
import Hufflepuff from "../components/Images/hufflepuffSmall.png";
import Ravenclaw from "../components/Images/ravenclawSmall.png";
import Slytherin from "../components/Images/slytherinSmall.png";
// import Hogwarts from "../components/Images/hogwartsSmall.png";


class LogIn extends Component {
  state = {
    images: [
      { name: Gryffindor, value: "Gryffindor" },
      { name: Hufflepuff, value: "Hufflepuff" },
      { name: Ravenclaw, value: "Ravenclaw" },
      { name: Slytherin, value: "Slytherin" },
      // { name: Hogwarts, value: "Hogwarts"}
    ],
    email: "",
    password: "",
    house: "",
    loggedIn: false,
    user: null,
    message: "",
<<<<<<< HEAD
    redirect: false,
    error: ""
=======
    error: "",
    redirect: false
>>>>>>> 8370b4bbe23f94ce9d2eb9e34e26e92458ade17f
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
            house: user.data.houseName,
            user: user.data._id,
            redirect: true
          });
          console.log("log in successful");
<<<<<<< HEAD
          // window.location.href = '/home';
=======
          window.location.href = '/home';
          // <Redirect to="/home" />
>>>>>>> 8370b4bbe23f94ce9d2eb9e34e26e92458ade17f
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
    const { redirect } = this.state;

<<<<<<< HEAD
    const { redirect } = this.state;

    if (redirect) {
      return (
        <Redirect to={{ pathname: "/home", state: {id: this.state.user, house: this.state.house} }} />
      )
    }

=======
    if (redirect) {
      return <Redirect to="/" />;
    } 
>>>>>>> 8370b4bbe23f94ce9d2eb9e34e26e92458ade17f
    return (


      <Container>
        <Row>
          <Col size="md-4">
            <img src={Gryffindor} alt="house crest" width="200" height="250" className="center"></img>
                      <style>
            {"\
            .center{\
              display: block;\
              margin-left: auto;\
              margin-right: auto;\
              color: white;\
            }\
            "}
            {"\
            .textCenter{\
              display: block;\
              margin-left: 10px;\
              margin-right: 10px;\
              color: white;\
            }\
            "}
          </style>          
          </Col>
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
                className="warning"

                disabled={!(this.state.email && this.state.password)}
              >
                Submit
              </FormBtn>
              <Link to="/register">Haven't receievd your owl?</Link>
            </form>
          </Col>
          <Col size="md-4">
            <img src={Slytherin} alt="house crest" width="200" height="250" className="center"></img>
                      <style>
            {"\
            .center{\
              display: block;\
              margin-left: auto;\
              margin-right: auto;\
              color: white;\
            }\
            "}
            {"\
            .textCenter{\
              display: block;\
              margin-left: 10px;\
              margin-right: 10px;\
              color: white;\
            }\
            "}
          </style>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col size="md-4">
            <img src={Ravenclaw} alt="house crest" width="200" height="250" className="center"></img>
                      <style>
            {"\
            .center{\
              display: block;\
              margin-left: auto;\
              margin-right: auto;\
              color: white;\
            }\
            "}
            {"\
            .textCenter{\
              display: block;\
              margin-left: 10px;\
              margin-right: 10px;\
              color: white;\
            }\
            "}
          </style>
          </Col>
            <Col size="md-4" className="d-flex justify-content-between ">

              {/* <Link 
                to="/api/users/google"
                >
                <Button outline color="warning" className="btn btn-secondary">Google</Button>
              </Link>
              <Link 
                to="/api/users/github"
                >
                <Button outline color="warning" className="btn btn-secondary">Github</Button>
              </Link>
              <Link 
                to="/api/users/twitter"
                >
                <Button outline color="warning" className="btn btn-secondary">Twitter</Button>
              </Link> */}
            </Col>
          <Col size="md-4">
            <img src={Hufflepuff} alt="house crest" width="200" height="250" className="center"></img>
                      <style>
            {"\
            .center{\
              display: block;\
              margin-left: auto;\
              margin-right: auto;\
              color: white;\
            }\
            "}
            {"\
            .textCenter{\
              display: block;\
              margin-left: 10px;\
              margin-right: 10px;\
              color: white;\
            }\
            "}
          </style>
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
    );
  }
}

export default LogIn;
