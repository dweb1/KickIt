const express = require("express");
const User = require("../models/user");
const Player = require("../models/player");

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

router.get("/:userId/favPlayers", (req, res) => {
  User.findById(req.params.userId).then((user) => {
    res.json(user.favPlayers);
  })
})

// router.get("/:userId/favPlayers/delete/:favPlayerId", (req, res) => {
//   var foundUserFav = "";
//   // console.log(User);
//   User.findById(req.params.userId).then((user) => {
//     foundUserFav = user.favPlayers;
//     // console.log(foundUserFav);
//     console.log(req.params.favPlayerId);
//     // foundUserFav.findById(req.params.favPlayerId).then((player) => {
//     //   console.log(player);
//   })

//   })
//   console.log(route);
//   console.log(playerId)
//   route.findById(req.params.favPlayerId).then((player) => {
//     console.log(player);
    
//     var array = user.favPlayers;
//     var foundPlayer = array.indexOf({playerId});
//     res.json(user.favPlayers._id);
  // })

router.post("/", (req, res) => {
  const newUser = new User();
  newUser.username = req.body.username;
  const accountCreated = req.body.accountCreated;
  newUser.accountCreated = accountCreated;
  newUser.save().then((user) => {
    res.json(user);
  }).catch(err => console.log(err));
})

router.put("/:id/updatefavplayers", (req, res) => {
  User.findByIdAndUpdate(req.params.id, {favPlayers: req.body.favPlayers})
  .then((favPlayers) =>{
    res.json(favPlayers);
  })
});

router.put("/:id/updatefavteams", (req, res) => {
  User.findByIdAndUpdate(req.params.id, {favTeams: req.body.favTeams})
  .then((favTeams) =>{
    res.json(favTeams);
  })
});

// router.delete("/:userId/favTeams/:favTeamId", (req, res) => {
//   console.log(req.params);
//   User.findById(req.params.userId).then(user => {
//     const newFavTeams = user.favTeams.filter(favTeam => {
//       return favTeam.id !== req.params.favTeamId
//     });
//     console.log(newFavTeams);
//     user.favTeams = newFavTeams;
//     return user.save();
//     })
//     .then((favTeam) => {
//       console.log(favTeam);
//       res.send("Successfully Deleted");
//     })
//     .catch(err => console.log(err))
//   })

  router.delete("/:userId/favPlayers/:favPlayerId", (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
      const newFavPlayers = user.favPlayers.filter(favPlayer => {
        console.log(favPlayer._id);
        return favPlayer._id !== req.params.favPlayerId
      });
      user.favPlayers = newFavPlayers;
      return user.save();
      })
      .then((favPlayer) => {
        res.send("Successfully Deleted");
      })
      .catch(err => console.log(err))
    })

module.exports = router;