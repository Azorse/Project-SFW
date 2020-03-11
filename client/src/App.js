import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import Register from "./pages/Register"
// import Standings from "./pages/Standings"
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Standings from "./pages/Standings";

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route exact path="/home" component={Home} />
          <Route path="/standings" component={Standings} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
