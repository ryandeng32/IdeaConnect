import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../spinner/Spinner";
import IdeaItem from "../ideas/IdeaItem";
import CreateIdea from "../ideasForm/CreateIdea";
import "./Ideas.css";
const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    axios.get("/api/ideas").then((res) => setIdeas(res.data));
  }, []);
  if (ideas.length === 0) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <CreateIdea />
      <div className="ideas">
        {ideas.map((idea) => (
          <IdeaItem key={idea._id} idea={idea} />
        ))}
      </div>
    </Fragment>
  );
};
export default Ideas;
