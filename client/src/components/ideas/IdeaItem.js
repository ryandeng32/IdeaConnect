import React from "react";
import { Link } from "react-router-dom";
const IdeaItem = ({ idea: { abstract, description, skills, _id } }) => {
  return (
    <div className="idea">
      <h1>{abstract}</h1>
      <p>{description}</p>
      {skills.map((skill, i) => (
        <small key={i} className="skill">
          {skill}
        </small>
      ))}
      <div>
        <Link to={`/room/${_id}`}>Join</Link>
      </div>
    </div>
  );
};
export default IdeaItem;
