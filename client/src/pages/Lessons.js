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
    openedList: [],
    username: "",
    email: "",
    house: "",
    houseImg: ""
  };

  componentDidMount() {
    // this.loadUser();
  }

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
        <Row>
          <Col size="md-12">
            <Jumbotron house={this.state.house} image={this.state.houseImg}>
              <h1>Harry Potter Lesson</h1>
            </Jumbotron>
            <h1>Hello {id}{house}</h1>
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
