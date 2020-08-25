import React, { useState } from "react";
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
    <form className="form" onSubmit={onSubmit}>
      <input
        value={abstract}
        name="abstract"
        onChange={handleChange}
        placeholder="Abstract"
        autoComplete="off"
        required
      />
      <input
        value={description}
        name="description"
        onChange={handleChange}
        autoComplete="off"
        placeholder="Description"
      />
      <input
        value={skills}
        name="skills"
        onChange={handleChange}
        autoComplete="off"
        placeholder="Skills"
      />
      <button type="submit">Create</button>
    </form>
  );
};
export default CreateIdea;
