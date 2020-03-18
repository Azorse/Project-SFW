import React, { Component } from "react";
import DeleteBtn from "../components/Button";
import {Jumbotron2 as Jumbotron} from "../components/Jumbotron";
import API from "../utils/API";
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
      {name: Gryffindor, value: "Gryffindor"}, 
      {name: Hufflepuff, value: "Hufflepuff"},
      {name: Ravenclaw, value: "Ravenclaw"},
      {name: Slytherin, value: "Slytherin"}
    ],
    firstname: "",
    secondname: "",
    username: "",
    house: "",
    email: "",
    password: "",
    id: ""
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
    const {firstname, secondname, username, email, password, house} = this.state
    console.log("submit works");
    API.saveUser({
      firstName: firstname,
      lastName: secondname,
      username: username,
      houseName: house,
      email: email,
      password: password
    })
      .then(res => {
        console.log(res)
        this.setState({
          id: res.data._id
        })
        // console.log(res.data)
        // console.log(res.data._id)
        // window.location.href = "/home/"+res.data._id;
      })
      .catch(err => console.log(err));

    // window.location.href = "/home";
  };

  render() {
    const {firstname, secondname, username, email, password, house} = this.state
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Log In</h1>
            </Jumbotron>
            <form>
            <Input
                value={this.state.firstname}
                onChange={this.handleInputChange}
                name="firstname"
                placeholder="First Name (required)"
              />
              <Input
                value={this.state.secondname}
                onChange={this.handleInputChange}
                name="secondname"
                placeholder="Second Name (required)"
              />
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
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <Link to= {{pathname: "/home", state: {id: this.state.id, house: this.state.house} }}>
                Go to home
              </Link>
              <FormBtn
                disabled={
                  !(firstname && secondname && username && email && password && house)
                }
                onClick={this.handleFormSubmit}>
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          {this.state.images.map(image => (
            <ListItem>
              <img
                src={image.name}
                id={image.value}
                width="200"
                height="250"
                // style={{background:"rgba(0,0,0,1)"}}
                value={image.value}
                onClick={e => {this.checkImg(e, image.name)}}></img>
            </ListItem>
          ))}
        </Row>
      </Container>
    );
  }
}

export default LogIn;
