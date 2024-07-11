import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App(props) {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" />

        <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <TextForm heading="Enter The Text To Analyze" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
