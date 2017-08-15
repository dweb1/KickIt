const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
  name: String,
  nationality: String,
  position: String,
  jerseyNumber: Number,
  dateOfBirth: String,
});

//This needs to be build out later
const fixtureSchema = mongoose.Schema({
  matchday: Number,
  date: String,
  homeTeamName: String,
  awayTeamName: String,
  result: String
})

const teamSchema = mongoose.Schema({
  name: String,
  crestURL: String,
  roster: String,
  fixtures: String
});

const userSchema = mongoose.Schema({
  username: String,
  accountCreated: String,
  favTeams: [teamSchema],
  favPlayers: [playerSchema]
});


const User = mongoose.model('User', userSchema);
const Team = mongoose.model('Team', teamSchema);
const Player = mongoose.model('Player', playerSchema);
const Fixture = mongoose.model('Fixture', fixtureSchema);

module.exports = {
  User, Team, Player, Fixture
}