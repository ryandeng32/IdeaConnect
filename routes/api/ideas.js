const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const checkObjectId = require("../../middleware/checkObjectId");
const Idea = require("../../models/Idea");

// @route       POST api/ideas
// @desc        Create an idea
// @access      Public
router.post(
  "/",
  check("abstract", "Abstract is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { abstract, description, skills } = req.body;
    const newIdeaFields = {
      abstract,
      description,
      skills: skills.split(",").map((skill) => skill.trim()),
    };
    try {
      let idea = await Idea(newIdeaFields);
      idea.save();
      res.json(idea);
    } catch {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route       GET api/ideas
// @desc        get all ideas
// @access      Public
router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find().sort({ date: -1 });
    res.json(ideas);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       GET api/ideas/:id
// @desc        get idea by id
// @access      Public
router.get("/:id", checkObjectId("id"), async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    if (!idea) {
      return res.status(404).json({ msg: "There is no idea with that ID" });
    }
    res.json(idea);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
module.exports = router;
