import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Ideas from "./components/ideas/Ideas";
import Room from "./components/room/Room";
const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Ideas} />
      <Route exact path="/room/:id" component={Room} />
    </Router>
  );
};

export default App;
