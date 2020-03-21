import React, { Component } from "react";
import DeleteBtn from "../components/Button";
import { Jumbotron3 as Jumbotron } from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import Gryffindor from "../components/Images/gryffindorSmall.png";
import Hufflepuff from "../components/Images/hufflepuffSmall.png";
import Ravenclaw from "../components/Images/ravenclawSmall.png";
import Slytherin from "../components/Images/slytherinSmall.png";
import Snape from "../components/Images/Severus_Snape.jpg";
import Harry from "../components/Images/Harry_Potter_Real.png"
import Ron from "../components/Images/Ron_Weasley_Real.png"
import Hermoine from "../components/Images/Hermoine_Real.png"
import Albus from "../components/Images/Albus_Dumbledor_Real.png"


class Home extends Component {
  state = {
    images: [
      {
        name: Gryffindor,
        value: "Gryffindor",

        data:
          `You might belong in Gryffindor,
          Where dwell the brave at heart,
          Their daring, nerve, and chivalry
          Set Gryffindors apart`,
        people: [
          {name: "Harry Potter", face: Harry, desc: "Hello this is Harry Potter", num: 0},
          {name: "Ron Weasley", face: Ron, desc: "I am not Harry Potter. I am Ron", num: 1},
          {name: "Hermoine Granger", face: Hermoine, desc: "I'm the only redhead in this house", num: 2},
          {name: "Ablus Dumbledore", face: Albus, desc: "Old Man", num: 3}
        ]
      },
      {
        name: Hufflepuff,
        value: "Hufflepuff",
        value2: "Hufflepuff",
        data:
          `You might belong in Hufflepuff,
          Where they are just and loyal,
          Those patient Hufflepuffs are true
          And unafraid of toil`,
        people: [
          {name: "Severus Snape", face: Snape, desc: "This is Severus Snape", num: 0},
          {name: "Severus Snape", face: Snape, desc: "This is also Snape", num: 1},
          {name: "Severus Snape", face: Snape, desc: "Snape is here aswell", num: 2},
          {name: "Severus Snape", face: Snape, desc: "Snaep", num: 3}
        ]
      },
      {
        name: Ravenclaw,
        value: "Ravenclaw",
        value2: "Ravenclaw",
        data:
          `Or yet in wise old Ravenclaw,
          if you've a ready mind,
          Where those of wit and learning,
          Will always find their kind`,
        people: [
          {name: "Severus Snape", face: Snape, desc: "This is Severus Snape", num: 0},
          {name: "Severus Snape", face: Snape, desc: "This is also Snape", num: 1},
          {name: "Severus Snape", face: Snape, desc: "Snape is here aswell", num: 2},
          {name: "Severus Snape", face: Snape, desc: "Snaep", num: 3}
        ]
      },
      {
        name: Slytherin,
        value: "Slytherin",
        data:
          `Or perhaps in Slytherin\n
          You'll make your real friends,\n
          Those cunning folks use any means\n
          To achieve their ends.`,
        people: [
          {name: "Severus Snape", face: Snape, desc: "This is Severus Snape", num: 0},
          {name: "Severus Snape", face: Snape, desc: "This is also Snape", num: 1},
          {name: "Severus Snape", face: Snape, desc: "Snape is here aswell", num: 2},
          {name: "Severus Snape", face: Snape, desc: "Snaep", num: 3}
        ]
      }
    ],
    username: "",
    email: "",
    house: "",
    houseImg: "",
    houseData: "",
    houseNum: 0
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
    this.loadUser(house)
  }


  // Will need modification after creating the database and api calls
  loadUser = (house) => {  
    let theHouse = house;
    let houseDesc = "";
    let houseNumber = 0;
    switch (theHouse) {
      case this.state.images[0].value:
        theHouse = this.state.images[0].name;
        houseDesc = this.state.images[0].data;
        houseNumber = 0;
        break;
      case this.state.images[1].value:
        theHouse = this.state.images[1].name;
        houseDesc = this.state.images[1].data;
        houseNumber = 1;
        break;
      case this.state.images[2].value:
        theHouse = this.state.images[2].name;
        houseDesc = this.state.images[2].data;
        houseNumber = 2;
        break;
      case this.state.images[3].value:
        theHouse = this.state.images[3].name;
        houseDesc = this.state.images[3].data;
        houseNumber = 3;
        break;
    }
    console.log(houseNumber)
    this.setState({ houseImg: theHouse, houseData: houseDesc, houseNum: houseNumber });
  };


  render() {
    const {id, house} = this.props.location.state
    const { houseImg, houseData, houseNum, images} = this.state;
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron id={id} house={house} image={houseImg}/>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
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
          </Col>
          <Col size="md-6">
            <h3 className="textCenter">{houseData}<br></br><hr></hr> ~{house}</h3>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <List>
              <h1>Famous {house}s</h1>
              <Row>
                {images[houseNum].people.map(person => (
                  <Col size="md-3">
                    <ListItem>
                      {/* <h1>{houseNum}</h1> */}
                      <h3>{person.name}</h3>
                      <button id={"toggler"+person.num} style={{background:"black"}}>
                      <img src={person.face} width="200" height="250" className="center"></img>
                      </button>
                      <UncontrolledCollapse toggler={"#toggler"+person.num}>
                        <Card>
                          <CardBody>
                            {person.desc}
                          </CardBody>
                        </Card>
                      </UncontrolledCollapse>
                    </ListItem>
                  </Col>
                ))}
              </Row>
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;