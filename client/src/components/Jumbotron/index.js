import React from "react";
import "./style.css";
import { Jumbotron as Jtron, Button, Row } from "reactstrap";
function Jumbotron(props) {
  return (
    <Jtron>
      <Row className="justify-content-between">
        <img src="./images/gryffindorSmall.png" alt="House Crest" />{" "}
        <h1>House Name</h1>
        <img src="./images/gryffindorSmall.png" alt="House Crest" />{" "}
      </Row>
      <Row className="d-flex justify-content-between pb-3 text-center Button">
        <Button outline color="warning">
          Lessons
        </Button>{" "}
        <Button outline color="warning">
          Quiz Page
        </Button>{" "}
        <Button outline color="warning">
          Scores
        </Button>{" "}
        <Button outline color="warning">
          User Profile
        </Button>{" "}
      </Row>
    </Jtron>
  );
}

export default Jumbotron;
