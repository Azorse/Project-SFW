import React, { Component } from "react";
import DeleteBtn from "../components/Button";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";


class Home extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

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
      this.state.password
    ) {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }).then(res => {
        console.log(res);
        if (!res.data.errmsg) {
          console.log("all good");
          this.setState({
            redirectTo: "/home"
          });
        } else {
          console.log("duplicate email");
        }
      });
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-4"></Col>
          <Col size="md-4">
            <Jumbotron>
              <h1>Register</h1>
            </Jumbotron>
            <form>
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
                disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Sign Up
              </FormBtn>
            </form>
          </Col>
          <Col size="md-4"></Col>
        </Row>
      </Container>
    );
  }
}

export default Home;