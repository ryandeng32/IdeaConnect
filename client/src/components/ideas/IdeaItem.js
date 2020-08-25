import React, { useState } from "react";
import { Link } from "react-router-dom";
const IdeaItem = ({ idea: { abstract, description, skills, _id } }) => {
  const [name, setName] = useState("");
  const handleClick = (e) => {
    if (name === "") {
      e.preventDefault();
      alert("Please enter a name!");
    }
    return null;
  };
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
        <input
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Link onClick={handleClick} to={`/room/${_id}/name/${name}`}>
          Join
        </Link>
      </div>
    </div>
  );
};
export default IdeaItem;
