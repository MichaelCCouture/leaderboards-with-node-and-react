const express = require("express");
const app = express();
const port = 3001 || process.env.PORT;
const bodyParser = require("body-parser");

//routing
const users = require('./routes/user');
const games = require('./routes/game');
const runs = require('./routes/run');

const mongoose = require("mongoose");

const dbRoute = "mongodb://jelo:a9bc839993@ds151382.mlab.com:51382/jelotest";

//connect to db
// mongoose.connect(
//   dbRoute,
//   { useNewUrlParser: true }
// );

// let db = mongoose.connection;

//db.once("open", () => console.log("connected to the database"));
//db.on("error", console.error.bind(console, "MongoDB connection error:"));

//parse request body as json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/games', games);
app.use('/api/runs', runs);

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));