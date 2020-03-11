import React, { Component } from "react";
import DeleteBtn from "../components/Button";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class LogIn extends Component {
  state = {
    lessonData: [
      "This is the 1st paragraph",
      "This is the 2st paragraph",
      "This is the 3st paragraph"
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
              <h1>Harry Potter Lesson</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Button color="primary" id={"toggler"+book._id} style={{ marginBottom: '1rem' }}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Button>
                    <UncontrolledCollapse toggler={"#toggler"+book._id}>
                      <Card>
                        <CardBody>
                          <img src={book.image}></img>
                          <hr></hr>
                          Description: {book.description}
                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    <ViewBtn onClick={() => this.linkBook(book.link)} />
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