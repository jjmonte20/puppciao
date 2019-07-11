import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* regular paths */}
          <Route exact path="/" component={Home} />
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
