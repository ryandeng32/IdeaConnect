import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import "./Form.css";
import axios from "axios";
const CreateIdea = () => {
  const [complete, setComplete] = useState(false);
  const [formData, setFormData] = useState({
    abstract: "",
    description: "",
    skills: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post("/api/ideas", formData, config);
    setFormData({
      abstract: "",
      description: "",
      skills: "",
    });
    setComplete(true);
  };
  const { abstract, description, skills } = formData;

  if (complete) {
    return <Redirect to="/" />;
  }
  return (
    <Fragment>
      <form className="form" onSubmit={onSubmit}>
        <h1 className="form-text">Share your idea</h1>
        <small className="form-hint">Short abstract of the idea</small>
        <input
          value={abstract}
          name="abstract"
          onChange={handleChange}
          placeholder="Abstract"
          autoComplete="off"
          required
        />
        <small className="form-hint">Brief description of the idea</small>
        <input
          value={description}
          name="description"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Description"
        />
        <small className="form-hint">
          Comma seperated values (eg. "Python, JS, MongoDB")
        </small>
        <input
          value={skills}
          name="skills"
          onChange={handleChange}
          autoComplete="off"
          placeholder="Skills"
        />
        <button type="submit">Create</button>
      </form>
    </Fragment>
  );
};
export default CreateIdea;
