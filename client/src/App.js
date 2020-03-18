import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/LogIn";
import LogIn2 from "./pages/FakeLogIn";
import Home from "./pages/Home";
import Register from "./pages/Register";
import HouseInfo from "./pages/HouseInfo"
import NoMatch from "./pages/NoMatch";

import Standings from "./pages/Standings";
import Lessons from "./pages/Lessons";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LogIn} />
          {/* <Route exact path="/" component={LogIn2} /> */}
          <Route exact path="/home" component={Home} />
          <Route exact path="/houseInfo" component={HouseInfo} />
          <Route exact path="/standings" component={Standings} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/lessons" component={Lessons} />
          <Route exact path="/quiz" component={Quiz} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
