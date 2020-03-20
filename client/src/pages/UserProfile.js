import React, { Component } from "react";
import DeleteBtn from "../components/Button";
import { Jumbotron } from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Gryffindor from "../components/Images/gryffindorSmall.png";
import Hufflepuff from "../components/Images/hufflepuffSmall.png";
import Ravenclaw from "../components/Images/ravenclawSmall.png";
import Slytherin from "../components/Images/slytherinSmall.png";

class UserProfile extends Component {
  state = {
    username: "",
    email: "",
    house: "",
    houseImg: "",
    houseData: ""
  };

  componentDidMount() {
    const {id, house} = this.props.location.state
    console.log(id)
    console.log(house)
    API.getUser(id)
      .then(res =>{
        console.log(res)
        this.setState({ username: res.data.username, house: res.data.house })
      })
      .catch(err => console.log(err));
  }


  // Will need modification after creating the database and api calls
  loadUser = (house) => {  

    let theHouse = house;
    let houseDesc = "";

    switch (theHouse) {
      case this.state.images[0].value:
        theHouse = this.state.images[0].name;
        houseDesc = this.state.images[0].data;
        break;
      case this.state.images[1].value:
        theHouse = this.state.images[1].name;
        houseDesc = this.state.images[1].data;
        break;
      case this.state.images[2].value:
        theHouse = this.state.images[2].name;
        houseDesc = this.state.images[2].data;
        break;
      case this.state.images[3].value:
        theHouse = this.state.images[3].name;
        houseDesc = this.state.images[3].data;
        break;
    }
    this.setState({ houseImg: theHouse, houseData: houseDesc });
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
    const {id, house} = this.props.location.state
    const { houseImg, houseData } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron id={id} house={house} image={houseImg}/>
          </Col>
        </Row>
        <Row>
          <img src={houseImg} width="200" height="250" className="center"></img>          
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
          <h3 className="textCenter">{houseData}</h3>
        </Row>
      </Container>
    );
  }
}

export default UserProfile;
