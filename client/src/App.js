import React from "react";
import NavBar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          {/* regular paths */}
          <Route exact path="/" component={Home} />
          {/* dynamic paths */}
          {/* <Route exact path="/books/:id" component={Detail} /> */}
          {/* no match */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
