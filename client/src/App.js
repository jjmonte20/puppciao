import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoginSignup from './pages/LoginSignup';
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* regular paths */}
          <Route exact path="/" component={Home} />
          <Route exact path="/loginsignup" component={LoginSignup} />
          {/* dynamic paths */}
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* no match */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
