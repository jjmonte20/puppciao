import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './pages/HomePage';
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* regular paths */}
          <Route exact path="/" component={Homepage} />
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
