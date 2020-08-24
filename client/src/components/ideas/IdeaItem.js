import React from "react";

const IdeaItem = ({ idea: { abstract, description, skills } }) => {
  return (
    <div className="idea">
      <h1>{abstract}</h1>
      <p>{description}</p>
      {skills.map((skill) => (
        <small className="skill">{skill}</small>
      ))}
    </div>
  );
};
export default IdeaItem;
