require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Player = require('../models/player');
var Team = require('../models/team');
var User = require('../models/user');

// Use native promises
mongoose.Promise = global.Promise;

Player.remove({}, (err) => console.log(err));
Team.remove({}, (err) => console.log(err));
User.remove({}, (err) => console.log(err));

const buffon = new Player({
    name: "Gianluigi Buffon",
    position: "GK",
    jerseyNumber: 1,
    dateOfBirth: "test",
})

const juventus = new Team({
    name: "Juventus FC",
    crestURL: "http://upload.wikimedia.org/wikipedia/de/d/d2/Juventus_Turin.svg",
    roster: [buffon],
    fixtures: "test"
});

juventus.save().then(() => console.log("La Vecchia Signora Saved!"));
buffon.save().then(() => console.log("Numero Uno Saved!"))

mongoose.connection.close();