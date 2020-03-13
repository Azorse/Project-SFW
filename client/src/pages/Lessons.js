import React, { Component } from "react";
import DeleteBtn from "../components/Button";
import { Jumbotron } from "../components/Jumbotron";

import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";

class LogIn extends Component {
  state = {
    lesson: [
      { name: "1", value: "This is the 1st paragraph" },
      { name: "2", value: "This is the 2nd paragraph" },
      { name: "3", value: "This is the 3rd paragraph" }
    ],
    openedList: [],
    username: "",
    email: "",
    house: ""
  };

  componentDidMount() {
    // this.loadBooks();
  }

  checkOpened = num => {
    // let list = this.state.openedList;
    // list.push(num)
    // list.sort(list.map(item => parseInt(item)))
    // console.log(list)
    // this.setState({
    //   openedList: list
    // })
  };

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   console.log("submit works")
  //   if (this.state.username && this.state.email && this.state.house) {
  //     //Put code here
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Harry Potter Lesson</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.lesson.length ? (
              <List>
                {this.state.lesson.map(book => (
                  <ListItem key={book.name}>
                    <Button
                      color="primary"
                      id={"toggler" + book.name}
                      style={{ marginBottom: "1rem" }}
                      onClick={() => this.checkOpened(book.name)}
                    >
                      <strong>Lesson {book.name}</strong>
                    </Button>
                    <UncontrolledCollapse toggler={"#toggler" + book.name}>
                      <Card>
                        <CardBody>{book.value}</CardBody>
                      </Card>
                    </UncontrolledCollapse>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3></h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LogIn;
