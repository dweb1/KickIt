const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.get("/", (req, res) => {
  User.find().then((user) => {
    res.json(user);
  });
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    res.json(user);
  })
})

router.post("/", (req, res) => {
  const newUser = new User();
  newUser.username = req.body.username;
  const accountCreated = req.body.accountCreated;
  newUser.accountCreated = accountCreated;
  newUser.save().then((user) => {
    res.json(user);
  }).catch(err => console.log(err));
})

module.exports = router;