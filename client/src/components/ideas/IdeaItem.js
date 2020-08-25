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
      <h1>
        {abstract.length >= 20 ? abstract.slice(0, 20) + "..." : abstract}
      </h1>
      <p>
        {description.length >= 50
          ? description.slice(0, 50) + "..."
          : description}
      </p>
      <div className="skills">
        {skills.length !== 1 || skills[0] !== ""
          ? skills.map((skill, i) => (
              <small key={i} className="skill">
                {skill}
              </small>
            ))
          : null}
      </div>

      <div className="input">
        <input
          value={name}
          placeholder="Name: "
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Link onClick={handleClick} to={`/room/${_id}/name/${name}`}>
          <i className="fas fa-sign-in-alt"></i>
        </Link>
      </div>
    </div>
  );
};
export default IdeaItem;
