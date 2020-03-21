import React, { Component } from "react";
import { Jumbotron } from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { UncontrolledCollapse, Button, CardBody, Card } from "reactstrap";
import Nav from "../components/Nav";
import Gryffindor from "../components/Images/gryffindorSmall.png";
import Hufflepuff from "../components/Images/hufflepuffSmall.png";
import Ravenclaw from "../components/Images/ravenclawSmall.png";
import Slytherin from "../components/Images/slytherinSmall.png";
import Hogwarts from "../components/Images/hogwartsSmall.png";

class LogIn extends Component {
  state = {
    lesson: [
      {name:"1", value:"Owls are the primary means of communication between wizards"},
      {name:"2", value:"One cannot become truly immortal, but becoming a ghost is possible for wizards and witches; but it is said that this is a pale imitation of life. Whether or not they are truly sentient beings of independent existence is unclear; as Severus Snape stated that a ghost is merely the imprint of a departed soul left upon the earth"},
      {name:"3", value:"Voldemort’s wand is made of yew. Yew is seen by some as having immense supernatural power and being a symbol of death and rebirth, the same immortality that Voldemort seeks. Historically, nearly all wizards have used a magical wand of some sort that channels a wizard’s power and acts as a symbol of authority (such as a shepherd’s staff)"},
      {name:"4", value:"Hogwarts was founded 1,000 years ago by Godric Gryffindor (fire/lion), Salazar Slytherin (water/serpent), Helga Hufflepuff (earth/badger), and Rowena Ravenclaw (air/raven). Its crest includes each of the animal representations of the four founders"},
      {name:"5", value:"In the Hogwarts school, grades include Outstanding, Exceeds Expectations, and Acceptable. The failing grades include Poor, Dreadful, and Troll."},
      {name:"6", value:"A Mandrake, also known as Mandragora, is a magical and sentient plant which has a root that looks like a human (like a baby when the plant is young, but maturing as the plant grows). When matured, its cry can be fatal to any person who hears it"},
      {name:"7", value:"Basilisks have the ability to petrify people who see them indirectly or kill them with their gaze, or from the venom in their fangs. While petrification can be cured by mandrake root, and wounds from basilisk fangs cured by phoenix tears, these treatments are difficult to prepare or obtain"},
      {name:"8", value:"A Dark charm is primarily defined as any charm that consistently affects the object in a negative manner, usually associated with varying levels of discomfort. Dark charms can be classified into three groups: jinxes, hexes, & curses. These groups form a hierarchy, with jinxes at the base, hexes in-between, and curses at the top. The further one ascends up this hierarchy, the more wicked, the stronger, the longer-lasting and the less reversible the Dark spell's effects appear to be. The Unforgivable Curses are the strongest known Dark spells in existence, as their effects are very powerful and their use requires skill"},
      {name:"9", value:"The Celtic Tree Calendar has assigned trees to different parts of the year and it sometimes plays a part in wandlore. This calendar shows each month and the wood that goes with it. Some wands and their owners align with the calendar. Their wands are made of the wood that is linked to their date of birth."},
      {name:"10", value:"Rule of Creation: While it is possible to conjure things out of nothing and duplicate items, it is far more tricky to create something that fits an exact specification rather than a general one. Moreover, a magically imitated object will never be as real as the genuine one, with duplicated food being less fulfilling than the real thing, and conjured creatures only demonstrating surface-level behaviour. Furthermore, magically imitated objects tend not to be as resistant to deterioration as the natural ones, being prone to breaking, cracking, melting, rusting, and other forms of breakdown."}
    ],
    images: [
        {
          name: Gryffindor,
          value: "Gryffindor",
          data:
            "The Gryffindor house emphasises the traits of courage as well as daring, nerve, and chivalry, and thus its members are generally regarded as brave, though sometimes to the point of recklessness. Some Gryffindors have also been noted to be short-tempered."
        },
        {
          name: Hufflepuff,
          value: "Hufflepuff",
          data:
            "Students belonging to this house are known to be hard-working, friendly, loyal, honest and rather impartial. It may be that due to their values, Hufflepuffs are not as competitive as the other houses, and are more modest about their accomplishments. Hufflepuff is the most inclusive among the four houses; valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its students."
        },
        {
          name: Ravenclaw,
          value: "Ravenclaw",
          data:
            "Ravenclaw House prizes learning, wisdom, wit, and intellect in its members. Thus, many Ravenclaws tend to be academically motivated and talented students. They also pride themselves on being original in their ideas, and methods. It's not unusual to find Ravenclaw students practising especially different types of magic that other houses might shun."
        },
        {
          name: Slytherin,
          value: "Slytherin",
          data:
            "Slytherins tend to be ambitious, shrewd, cunning, strong leaders, and achievement-oriented. They also have highly developed senses of self-preservation. This means that Slytherins tend to hesitate before acting, so as to weigh all possible outcomes before deciding exactly what should be done."
        },
        {
          name: Hogwarts,
          value: "Hogwarts",
          data:
            "You have yet to be sorted"
        }
      ],
    openedList: [],
    firstName: "",
    email: "",
    house: "",
    houseImg: "",
    loggedIn: false,
    user: null
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

  checkOpened = (num) => {
    let list = this.state.openedList;
    let newNum = true;
    //Check if number has already been added
    for(let i = 0; i < list.length; i++){
      if(parseInt(num) === list[i]){
        newNum = false;
      }
    }
    //If there is a new number
    if(newNum){
      list.push(parseInt(num))
    }
    //If List is greater than one
    if(list.length > 1){
      list.sort()
    }
    console.log(list)
    this.setState({
      openedList: list
    })
  }

  // loadUser = (id) => {
  //   API.getUser(id)
  //     .then(res =>
  //       this.setState({ username: res.data.userName, house: res.data.houseName })
  //     )
  //     .catch(err => console.log(err));
  // };

  handleSubmit = event => {
    console.log("submit works")
    // this.setState({
    //   readData: openedList.length || openedList
    // })
  };

  render() {
    const {id, house} = this.props.location.state
    return (
      <Container fluid>
      <Nav firstName={this.state.firstName}/>
        <Row>
          <Col size="md-12">
            <Jumbotron house={house} image={this.state.houseImg} id={id}>
              <h1>Harry Potter Lesson</h1>
            </Jumbotron>
            <h1>Hello {this.state.firstName}</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Button onClick={this.handleSubmit}>
              Finished
            </Button>
            {this.state.lesson.length ? (
              <List>
                {this.state.lesson.map(paragraph => (
                  <ListItem key={paragraph.name}>
                    <Button color="primary" id={"toggler"+paragraph.name} style={{ marginBottom: '1rem' }}
                      onClick={() => this.checkOpened(paragraph.name)}>
                      <strong>
                        Lesson {paragraph.name}
                      </strong>
                    </Button>
                    <UncontrolledCollapse toggler={"#toggler"+paragraph.name}>
                      <Card>
                        <CardBody>
                          {paragraph.value}
                        </CardBody>
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
