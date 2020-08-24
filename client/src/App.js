import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Ideas from "./components/ideas/Ideas";
const App = () => {
  return (
    <Router>
      <Route eact path="/" component={Ideas} />
    </Router>
  );
};

export default App;
