import React from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route key="home" exact path="/home">
            <Home/>
          </Route>
          <Route key="about" exact path="/about">
            <About/>
          </Route>
          <Route key="movies" exact path="/movies">
            <Movies/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
