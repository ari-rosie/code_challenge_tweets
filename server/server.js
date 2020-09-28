"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const http = require("http");
const socketio = require("socket.io");
const Twitter = require("twitter");

require("dotenv").config();

const PORT = 4000;

const app = express();

const server = http.createServer(app);
const io = socketio(server);

app
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })

  .use(morgan("dev"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use("/", express.static(__dirname + "/"));

// .use((req, res) => res.send("Not Found"));

const client = new Twitter({
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET_KEY,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

let followUserID;

let socketConnection;
let twitterStream;

// const handleGetTweets = () => {
  client.stream(
    "statuses/filter",
    {
      follow: "25073877, 1339835893",
    },
    (stream) => {
      stream.on("data", (tweet) => {
        // console.log(tweet);
        sendMessage(tweet);
        // console.log("stream");
      });
      stream.on("error", function (error) {
        throw error;
      });
      twitterStream = stream;
    }
  );
};

app.get("/tweets/:id", (req, res) => {
  const user = req.params.id;
  client.get(
    "statuses/user_timeline",
    { screen_name: user, count: 4 },
    function (err, tweets, response) {
      res.status(200).json({ data: tweets });
    }
  );
});

io.on("connection", (socket) => {
  socketConnection = socket;
  console.log("io connect");
  handleGetTweets();
  socket.on("connection", () => console.log("socket connected"));
  socket.on("disconnected", () => console.log("socket disconnected"));
});

const sendMessage = (msg) => {
  if (msg.text.includes("RT")) return;
  console.log("emit");
  socketConnection.emit("tweets", msg);
};

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
