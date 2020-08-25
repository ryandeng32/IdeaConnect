import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Ideas from "./components/ideas/Ideas";
import Room from "./components/room/Room";
import CreateIdea from "./components/ideasForm/CreateIdea";
import Navbar from "./components/layout/Navbar";
import Intro from "./components/layout/Intro";
const App = () => {
  return (
    <Router>
      <Navbar />
      <section className="container">
        <Route exact path="/" component={Intro} />
        <Route exact path="/" component={Ideas} />
        <Route exact path="/room/:room/name/:name" component={Room} />
        <Route exact path="/create-idea" component={CreateIdea} />
      </section>
    </Router>
  );
};

export default App;
