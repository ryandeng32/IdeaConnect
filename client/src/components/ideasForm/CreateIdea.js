import React, { useState } from "react";
import "./Form.css";
import axios from "axios";
const CreateIdea = () => {
  const [formData, setFormData] = useState({
    abstract: "",
    description: "",
    skills: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
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
  };
  const { abstract, description, skills } = formData;
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        value={abstract}
        name="abstract"
        onChange={handleChange}
        placeholder="Abstract"
        autocomplete="off"
        required
      />
      <input
        value={description}
        name="description"
        onChange={handleChange}
        autocomplete="off"
        placeholder="Description"
      />
      <input
        value={skills}
        name="skills"
        onChange={handleChange}
        autocomplete="off"
        placeholder="Skills"
      />
      <button type="submit">Create</button>
    </form>
  );
};
export default CreateIdea;
