const express = require("express");
const Team = require("../models/team");

const router = express.Router();

router.get("/", (req, res) => {
  Team.find().then((team) => {
    res.json(team);
  });
});

router.get("/:id", (req, res) => {
  Team.findById(req.params.id).then((team) => {
    res.json(team);
  })
})

module.exports = router;