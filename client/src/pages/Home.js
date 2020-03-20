import React, { Component } from "react";
import { Jumbotron } from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { ListItem } from "../components/List";
import Gryffindor from "../components/Images/gryffindorSmall.png";
import Hufflepuff from "../components/Images/hufflepuffSmall.png";
import Ravenclaw from "../components/Images/ravenclawSmall.png";
import Slytherin from "../components/Images/slytherinSmall.png";
import Hogwarts from "../components/Images/hogwartsSmall.png";
import Nav from "../components/Nav";

class Home extends Component {
  state = {
    images: [
      {
        name: Gryffindor,
        value: "gryffindor",
        data:
          "The Gryffindor house emphasises the traits of courage as well as daring, nerve, and chivalry, and thus its members are generally regarded as brave, though sometimes to the point of recklessness. Some Gryffindors have also been noted to be short-tempered."
      },
      {
        name: Hufflepuff,
        value: "hufflepuff",
        data:
          "Students belonging to this house are known to be hard-working, friendly, loyal, honest and rather impartial. It may be that due to their values, Hufflepuffs are not as competitive as the other houses, and are more modest about their accomplishments. Hufflepuff is the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its students."
      },
      {
        name: Ravenclaw,
        value: "ravenclaw",
        data:
          "Ravenclaw House prizes learning, wisdom, wit, and intellect in its members. Thus, many Ravenclaws tend to be academically motivated and talented students. They also pride themselves on being original in their ideas, and methods. It's not unusual to find Ravenclaw students practising especially different types of magic that other houses might shun."
      },
      {
        name: Slytherin,
        value: "slytherin",
        data:
          "Slytherins tend to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented. They also have highly developed senses of self-preservation. This means that Slytherins tend to hesitate before acting, so as to weigh all possible outcomes before deciding exactly what should be done."
      },
      {
        name: Hogwarts,
        value: "hogwarts",
        data:
          "You have yet to be sorted"
      }
    ],
    firstName: "",
    house: "",
    houseImg: "",
    houseData: "",
    loggedIn: false,
    user: null,
  };

  componentDidMount() {
    this.loggedIn();
    
  }


  loggedIn = () => {
    API.isLoggedIn().then( user => {
      if (user.data.loggedIn) {
        this.setState({
          user: user.data.user._id,
          firstName: user.data.user.firstName,
          house: user.data.user.houseName,
          loggedIn: true
        })
        this.loadUser(user.data.user.houseName)
      }
    }).catch(err => {
      console.log(err)
    });
  }

  loadUser = house => {
    let theHouse = house;
    let houseDesc = "";
    console.log(house)

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
      default:
        theHouse = this.state.images[4].name;
        houseDesc = this.state.images[4].data;
    }
    this.setState({ houseImg: theHouse, houseData: houseDesc });
  };

  render() {
    // const {id} = this.props.location.state
    const { houseImg, houseData, house } = this.state;
    return (
      <Container fluid>
      <Nav firstName={this.state.firstName}/>
        <Row>
          <Col size="md-12">
            <Jumbotron house={house} image={houseImg}/>
          </Col>
        </Row>
        <Row>
          <img src={houseImg} alt="house crest" width="200" height="250" className="center"></img>          
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

export default Home;
